import React,{useEffect , useMemo, useState,useCallback} from "react";
import { FaCirclePlus } from "react-icons/fa6";
import Button from "@components/ui/Button/Button";
import DataTable from 'react-data-table-component';
import { useDebounce } from "@hooks/UseDebounce";
import { useNavigate } from 'react-router-dom';


import ArrowDownward from '@material-ui/icons/ArrowDownward';

const sortIcon = <ArrowDownward />;

const customStyles = {
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#003366',
      paddingLeft: '8px',
      paddingRight: '8px',
      backgroundColor: '#DCE0EF',
    },
  },
  rows: {
    style: {
      minHeight: '60px', // minimum height of each row
      maxHeight: '100px', // optional, if you want fixed height
      paddingLeft: '8px',
      paddingRight: '8px',
      backgroundColor: '#F2F4F5',
      fontSize: '14px',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  }
};





const BussinessPartner = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedQuery = useDebounce(searchTerm, 300);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [partnerToDelete, setPartnerToDelete] = useState(null);

    useEffect(() => {
    if (debouncedQuery) {
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);
  const columns = useMemo(()=>[
  {
    name: 'BP UID ',
    selector: row => row.BPUID,
    sortable: true,
    cell: row => (
      <span className="font-inter text-blue-500">
        {row.BPUID }
      </span>
    ),
    grow: 0.8, // Adjust the width of the ID column
    style: {
      fontWeight: 'bold', // Make the ID text bold
      color: 'black', // Change the color of the ID text
    },
},
	{
		name: 'Business PartnerName',
		selector: row => row.BusinessPartnerName, // Assuming businessPartnerName is a field in your data
    sortable: true,
    grow: 3, // Adjust the width of the Business Partner Name column
    width: '204px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
    style: {
      fontWeight: 'bold', // Make the ID text bold
      color: 'black', // Change the color of the ID text
    },
	},
  {
    name: 'Company Name',
    selector: row => row.CompanyName, // Assuming phone is a field in your data
    sortable: true,
    grow: 3.5, // Adjust the width of the Phone column
    minWidth: '160px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
    style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'Business Code',
    selector: row => row.BusinessCode, // Assuming email is a field in your data
    sortable: true,
    grow: 3, // Adjust the width of the Age column
    minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
    style: {                                                
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'Entity Name',
    selector: row => row.EntityName, // Assuming address is a field in your data
    sortable: true,
     grow: 3, // Adjust the width of the Age column
    minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'Email Address',
    selector: row => row.EmailAddress, // Assuming address is a field in your data
    sortable: true,
     grow: 2, // Adjust the width of the Age column
     minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
    {
    name: 'Phone Number',
    selector: row => row.PhoneNumber, // Assuming address is a field in your data
    sortable: true,
    minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     grow: 2, // Adjust the width of the Age column
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'GL Account',
    selector: row => row.GLAccount, // Assuming address is a field in your data
    sortable: true,
    minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     grow: 2, // Adjust the width of the Age column
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'Bill Policy',
    selector: row => row.BillPolicy, // Assuming address is a field in your data
    sortable: true,
    minWidth: '120px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     grow: 2, // Adjust the width of the Age column
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
   {
    name: 'Payment Type',
    selector: row => row.PaymentType, // Assuming address is a field in your data
    sortable: true,
    minWidth: '150px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
     grow: 2, // Adjust the width of the Age column
     style: {
      fontWeight: 'bold', // Make the Phone text bold
      fontFamily: 'Inter', // Change the font family of the Phone text
    },
  },
  {
    name: 'Status',
    selector: row => row.status,
    minWidth: '100px', // Set a fixed width for the Business Partner Name column
    maxWidth: '300px',
    cell: row => (
      <span className={`px-3 py-1 rounded text-sm font-semibold ${row.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {row.status}
      </span>
    ),
  },
{
  name: 'Actions',
  minWidth: '100px',
  maxWidth: '300px',
  cell: row => (
    <div className="flex gap-3">
      {/* Edit Button */}
      <button
        className="group p-2.5 h-fit my-auto rounded-4xl text-sm bg-[#eeeeee] hover:bg-[#dce0ef]"
        onClick={() => console.log(`Edit ${row.id}`)}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2547_74954)">
            <path
              d="M8.75 3.50017H3.5C3.10218 3.50017 2.72064 3.65821 2.43934 3.93951C2.15804 4.22081 2 4.60234 2 5.00017V15.5002C2 15.898 2.15804 16.2795 2.43934 16.5608C2.72064 16.8421 3.10218 17.0002 3.5 17.0002H14C14.3978 17.0002 14.7794 16.8421 15.0607 16.5608C15.342 16.2795 15.5 15.898 15.5 15.5002V10.2502M14.375 2.37517C14.6734 2.0768 15.078 1.90918 15.5 1.90918C15.922 1.90918 16.3266 2.0768 16.625 2.37517C16.9234 2.67354 17.091 3.07821 17.091 3.50017C17.091 3.92213 16.9234 4.3268 16.625 4.62517L9.5 11.7502L6.5 12.5002L7.25 9.50017L14.375 2.37517Z"
              stroke="#1E1E1E"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-blue-600 group-hover:fill-[#dce0ef]"
            />
          </g>
          <defs>
            <clipPath id="clip0_2547_74954">
              <rect width="18" height="18" fill="white" transform="translate(0.5 0.5)" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {/* Delete Button */}
      <button
        className="group p-2.5 h-fit my-auto rounded-4xl text-sm bg-[#eeeeee] hover:bg-[#fee2e2]"
         onClick={() => openDeleteModal(row)}
            aria-label={`Delete ${row.BusinessPartnerName}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 21.5C6.95 21.5 6.47917 21.3042 6.0875 20.9125C5.69583 20.5208 5.5 20.05 5.5 19.5V6.5H4.5V4.5H9.5V3.5H15.5V4.5H20.5V6.5H19.5V19.5C19.5 20.05 19.3042 20.5208 18.9125 20.9125C18.5208 21.3042 18.05 21.5 17.5 21.5H7.5ZM17.5 6.5H7.5V19.5H17.5V6.5ZM9.5 17.5H11.5V8.5H9.5V17.5ZM13.5 17.5H15.5V8.5H13.5V17.5Z"
            fill="#1D1B20"
            className="group-hover:fill-[#dc2626]"
            strokeWidth="1"
          />
        </svg>
      </button>
    </div>
  ),
  grow: 6,
}
],[]);

const [data,setData] = useState([
  {
    EntityName: 'company',
    BusinessCode: 'OS002',
    CompanyName: 'JP Morgan',
    BusinessPartnerName: 'John Doe',
    BPUID: 'BP-0001',
    BillPolicy: 'Customer',
    TAXVAT: '8765433455',
    EmailAddress: 'osbiz@gmail.com',
    PhoneNumber: '9876543210',
    PaymentType: 'instant',
    GLAccount: '123456789',
    status: 'Active',
    ShippingAddress: {
      Street: '123 Wall Street',
      Country: 'USA',
      City: 'New York',
      Zip: '10005',
      State: 'NY',
      EmailAddress: 'shipping@jpmorgan.com',
      PhoneNumber: '1234567890'
    },
    BillingAddress: {
      Street: '456 Finance Ave',
      Country: 'USA',
      City: 'New York',
      Zip: '10006',
      State: 'NY',
      EmailAddress: 'billing@jpmorgan.com',
      PhoneNumber: '0987654321'
    },
    BankHolderName: 'JP Morgan Chase',
    AccountNumber: '123456789012',
    ReAccountNumber: '123456789012',
    BankIFSC: 'JPMC0000123',
    CodeName: 'JPM001',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Alice Smith',
      ContactNumber: '1112223333',
      EmailAddress: 'alice.smith@jpmorgan.com'
    },
    SecondaryResponder: {
      Name: 'Bob Johnson',
      ContactNumber: '4445556666',
      EmailAddress: 'bob.johnson@jpmorgan.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: true,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'firm',
    BusinessCode: 'OS003',
    CompanyName: 'Goldman Sachs',
    BusinessPartnerName: 'Jane Roe',
    BPUID: 'BP-0002',
    BillPolicy: 'Customer',
    TAXVAT: '9876543211',
    EmailAddress: 'contact@goldman.com',
    PhoneNumber: '9876543211',
    PaymentType: 'deferred',
    GLAccount: '223344556',
    status: 'Inactive',
    ShippingAddress: {
      Street: '200 Broad St',
      Country: 'USA',
      City: 'Boston',
      Zip: '02110',
      State: 'MA',
      EmailAddress: 'ship@goldman.com',
      PhoneNumber: '1122334455'
    },
    BillingAddress: {
      Street: '201 Finance Ave',
      Country: 'USA',
      City: 'Boston',
      Zip: '02111',
      State: 'MA',
      EmailAddress: 'bill@goldman.com',
      PhoneNumber: '5544332211'
    },
    BankHolderName: 'Goldman Sachs Bank',
    AccountNumber: '987654321098',
    ReAccountNumber: '987654321098',
    BankIFSC: 'GOLD0000123',
    CodeName: 'GS001',
    Currency: 'USD',
    AccountType: 'Savings',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Emily Davis',
      ContactNumber: '2223334444',
      EmailAddress: 'emily.davis@goldman.com'
    },
    SecondaryResponder: {
      Name: 'Michael Lee',
      ContactNumber: '7778889999',
      EmailAddress: 'michael.lee@goldman.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: false,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS003',
    CompanyName: 'Company 3',
    BusinessPartnerName: 'Partner 3',
    BPUID: 'BP-0003',
    BillPolicy: 'Vendor',
    TAXVAT: '9000000003',
    EmailAddress: 'partner3@example.com',
    PhoneNumber: '900000003',
    PaymentType: 'credit',
    GLAccount: 'GLACC3',
    status: 'Inactive',
    ShippingAddress: {
      Street: '30 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10003',
      State: 'CA',
      EmailAddress: 'shipping3@company.com',
      PhoneNumber: '999999993'
    },
    BillingAddress: {
      Street: '30 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20003',
      State: 'CA',
      EmailAddress: 'billing3@company.com',
      PhoneNumber: '888888883'
    },
    BankHolderName: 'Bank Holder 3',
    AccountNumber: 'ACC123456783',
    ReAccountNumber: 'ACC123456783',
    BankIFSC: 'IFSC00003',
    CodeName: 'CODE3',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 3',
      ContactNumber: '111111113',
      EmailAddress: 'primary3@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 3',
      ContactNumber: '222222223',
      EmailAddress: 'secondary3@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS004',
    CompanyName: 'Company 4',
    BusinessPartnerName: 'Partner 4',
    BPUID: 'BP-0004',
    BillPolicy: 'Customer',
    TAXVAT: '9000000004',
    EmailAddress: 'partner4@example.com',
    PhoneNumber: '900000004',
    PaymentType: 'instant',
    GLAccount: 'GLACC4',
    status: 'Active',
    ShippingAddress: {
      Street: '40 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10004',
      State: 'CA',
      EmailAddress: 'shipping4@company.com',
      PhoneNumber: '999999994'
    },
    BillingAddress: {
      Street: '40 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20004',
      State: 'CA',
      EmailAddress: 'billing4@company.com',
      PhoneNumber: '888888884'
    },
    BankHolderName: 'Bank Holder 4',
    AccountNumber: 'ACC123456784',
    ReAccountNumber: 'ACC123456784',
    BankIFSC: 'IFSC00004',
    CodeName: 'CODE4',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 4',
      ContactNumber: '111111114',
      EmailAddress: 'primary4@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 4',
      ContactNumber: '222222224',
      EmailAddress: 'secondary4@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: true,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS005',
    CompanyName: 'Company 5',
    BusinessPartnerName: 'Partner 5',
    BPUID: 'BP-0005',
    BillPolicy: 'Vendor',
    TAXVAT: '9000000005',
    EmailAddress: 'partner5@example.com',
    PhoneNumber: '900000005',
    PaymentType: 'credit',
    GLAccount: 'GLACC5',
    status: 'Inactive',
    ShippingAddress: {
      Street: '50 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10005',
      State: 'CA',
      EmailAddress: 'shipping5@company.com',
      PhoneNumber: '999999995'
    },
    BillingAddress: {
      Street: '50 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20005',
      State: 'CA',
      EmailAddress: 'billing5@company.com',
      PhoneNumber: '888888885'
    },
    BankHolderName: 'Bank Holder 5',
    AccountNumber: 'ACC123456785',
    ReAccountNumber: 'ACC123456785',
    BankIFSC: 'IFSC00005',
    CodeName: 'CODE5',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 5',
      ContactNumber: '111111115',
      EmailAddress: 'primary5@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 5',
      ContactNumber: '222222225',
      EmailAddress: 'secondary5@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: false,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS006',
    CompanyName: 'Company 6',
    BusinessPartnerName: 'Partner 6',
    BPUID: 'BP-0006',
    BillPolicy: 'Customer',
    TAXVAT: '9000000006',
    EmailAddress: 'partner6@example.com',
    PhoneNumber: '900000006',
    PaymentType: 'instant',
    GLAccount: 'GLACC6',
    status: 'Active',
    ShippingAddress: {
      Street: '60 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10006',
      State: 'CA',
      EmailAddress: 'shipping6@company.com',
      PhoneNumber: '999999996'
    },
    BillingAddress: {
      Street: '60 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20006',
      State: 'CA',
      EmailAddress: 'billing6@company.com',
      PhoneNumber: '888888886'
    },
    BankHolderName: 'Bank Holder 6',
    AccountNumber: 'ACC123456786',
    ReAccountNumber: 'ACC123456786',
    BankIFSC: 'IFSC00006',
    CodeName: 'CODE6',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 6',
      ContactNumber: '111111116',
      EmailAddress: 'primary6@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 6',
      ContactNumber: '222222226',
      EmailAddress: 'secondary6@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS007',
    CompanyName: 'Company 7',
    BusinessPartnerName: 'Partner 7',
    BPUID: 'BP-0007',
    BillPolicy: 'Vendor',
    TAXVAT: '9000000007',
    EmailAddress: 'partner7@example.com',
    PhoneNumber: '900000007',
    PaymentType: 'credit',
    GLAccount: 'GLACC7',
    status: 'Inactive',
    ShippingAddress: {
      Street: '70 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10007',
      State: 'CA',
      EmailAddress: 'shipping7@company.com',
      PhoneNumber: '999999997'
    },
    BillingAddress: {
      Street: '70 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20007',
      State: 'CA',
      EmailAddress: 'billing7@company.com',
      PhoneNumber: '888888887'
    },
    BankHolderName: 'Bank Holder 7',
    AccountNumber: 'ACC123456787',
    ReAccountNumber: 'ACC123456787',
    BankIFSC: 'IFSC00007',
    CodeName: 'CODE7',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 7',
      ContactNumber: '111111117',
      EmailAddress: 'primary7@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 7',
      ContactNumber: '222222227',
      EmailAddress: 'secondary7@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS008',
    CompanyName: 'Company 8',
    BusinessPartnerName: 'Partner 8',
    BPUID: 'BP-0008',
    BillPolicy: 'Customer',
    TAXVAT: '9000000008',
    EmailAddress: 'partner8@example.com',
    PhoneNumber: '900000008',
    PaymentType: 'instant',
    GLAccount: 'GLACC8',
    status: 'Active',
    ShippingAddress: {
      Street: '80 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10008',
      State: 'CA',
      EmailAddress: 'shipping8@company.com',
      PhoneNumber: '999999998'
    },
    BillingAddress: {
      Street: '80 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20008',
      State: 'CA',
      EmailAddress: 'billing8@company.com',
      PhoneNumber: '888888888'
    },
    BankHolderName: 'Bank Holder 8',
    AccountNumber: 'ACC123456788',
    ReAccountNumber: 'ACC123456788',
    BankIFSC: 'IFSC00008',
    CodeName: 'CODE8',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 8',
      ContactNumber: '111111118',
      EmailAddress: 'primary8@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 8',
      ContactNumber: '222222228',
      EmailAddress: 'secondary8@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: true,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS009',
    CompanyName: 'Company 9',
    BusinessPartnerName: 'Partner 9',
    BPUID: 'BP-0009',
    BillPolicy: 'Vendor',
    TAXVAT: '9000000009',
    EmailAddress: 'partner9@example.com',
    PhoneNumber: '900000009',
    PaymentType: 'credit',
    GLAccount: 'GLACC9',
    status: 'Inactive',
    ShippingAddress: {
      Street: '90 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '10009',
      State: 'CA',
      EmailAddress: 'shipping9@company.com',
      PhoneNumber: '999999999'
    },
    BillingAddress: {
      Street: '90 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '20009',
      State: 'CA',
      EmailAddress: 'billing9@company.com',
      PhoneNumber: '888888889'
    },
    BankHolderName: 'Bank Holder 9',
    AccountNumber: 'ACC123456789',
    ReAccountNumber: 'ACC123456789',
    BankIFSC: 'IFSC00009',
    CodeName: 'CODE9',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 9',
      ContactNumber: '111111119',
      EmailAddress: 'primary9@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 9',
      ContactNumber: '222222229',
      EmailAddress: 'secondary9@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0010',
    CompanyName: 'Company 10',
    BusinessPartnerName: 'Partner 10',
    BPUID: 'BP-00010',
    BillPolicy: 'Customer',
    TAXVAT: '90000000010',
    EmailAddress: 'partner10@example.com',
    PhoneNumber: '9000000010',
    PaymentType: 'instant',
    GLAccount: 'GLACC10',
    status: 'Active',
    ShippingAddress: {
      Street: '100 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100010',
      State: 'CA',
      EmailAddress: 'shipping10@company.com',
      PhoneNumber: '9999999910'
    },
    BillingAddress: {
      Street: '100 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200010',
      State: 'CA',
      EmailAddress: 'billing10@company.com',
      PhoneNumber: '8888888810'
    },
    BankHolderName: 'Bank Holder 10',
    AccountNumber: 'ACC1234567810',
    ReAccountNumber: 'ACC1234567810',
    BankIFSC: 'IFSC000010',
    CodeName: 'CODE10',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 10',
      ContactNumber: '1111111110',
      EmailAddress: 'primary10@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 10',
      ContactNumber: '2222222210',
      EmailAddress: 'secondary10@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: false,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0011',
    CompanyName: 'Company 11',
    BusinessPartnerName: 'Partner 11',
    BPUID: 'BP-00011',
    BillPolicy: 'Vendor',
    TAXVAT: '90000000011',
    EmailAddress: 'partner11@example.com',
    PhoneNumber: '9000000011',
    PaymentType: 'credit',
    GLAccount: 'GLACC11',
    status: 'Inactive',
    ShippingAddress: {
      Street: '110 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100011',
      State: 'CA',
      EmailAddress: 'shipping11@company.com',
      PhoneNumber: '9999999911'
    },
    BillingAddress: {
      Street: '110 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200011',
      State: 'CA',
      EmailAddress: 'billing11@company.com',
      PhoneNumber: '8888888811'
    },
    BankHolderName: 'Bank Holder 11',
    AccountNumber: 'ACC1234567811',
    ReAccountNumber: 'ACC1234567811',
    BankIFSC: 'IFSC000011',
    CodeName: 'CODE11',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 11',
      ContactNumber: '1111111111',
      EmailAddress: 'primary11@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 11',
      ContactNumber: '2222222211',
      EmailAddress: 'secondary11@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0012',
    CompanyName: 'Company 12',
    BusinessPartnerName: 'Partner 12',
    BPUID: 'BP-00012',
    BillPolicy: 'Customer',
    TAXVAT: '90000000012',
    EmailAddress: 'partner12@example.com',
    PhoneNumber: '9000000012',
    PaymentType: 'instant',
    GLAccount: 'GLACC12',
    status: 'Active',
    ShippingAddress: {
      Street: '120 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100012',
      State: 'CA',
      EmailAddress: 'shipping12@company.com',
      PhoneNumber: '9999999912'
    },
    BillingAddress: {
      Street: '120 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200012',
      State: 'CA',
      EmailAddress: 'billing12@company.com',
      PhoneNumber: '8888888812'
    },
    BankHolderName: 'Bank Holder 12',
    AccountNumber: 'ACC1234567812',
    ReAccountNumber: 'ACC1234567812',
    BankIFSC: 'IFSC000012',
    CodeName: 'CODE12',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 12',
      ContactNumber: '1111111112',
      EmailAddress: 'primary12@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 12',
      ContactNumber: '2222222212',
      EmailAddress: 'secondary12@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: true,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0013',
    CompanyName: 'Company 13',
    BusinessPartnerName: 'Partner 13',
    BPUID: 'BP-00013',
    BillPolicy: 'Vendor',
    TAXVAT: '90000000013',
    EmailAddress: 'partner13@example.com',
    PhoneNumber: '9000000013',
    PaymentType: 'credit',
    GLAccount: 'GLACC13',
    status: 'Inactive',
    ShippingAddress: {
      Street: '130 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100013',
      State: 'CA',
      EmailAddress: 'shipping13@company.com',
      PhoneNumber: '9999999913'
    },
    BillingAddress: {
      Street: '130 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200013',
      State: 'CA',
      EmailAddress: 'billing13@company.com',
      PhoneNumber: '8888888813'
    },
    BankHolderName: 'Bank Holder 13',
    AccountNumber: 'ACC1234567813',
    ReAccountNumber: 'ACC1234567813',
    BankIFSC: 'IFSC000013',
    CodeName: 'CODE13',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 13',
      ContactNumber: '1111111113',
      EmailAddress: 'primary13@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 13',
      ContactNumber: '2222222213',
      EmailAddress: 'secondary13@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: false
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0014',
    CompanyName: 'Company 14',
    BusinessPartnerName: 'Partner 14',
    BPUID: 'BP-00014',
    BillPolicy: 'Customer',
    TAXVAT: '90000000014',
    EmailAddress: 'partner14@example.com',
    PhoneNumber: '9000000014',
    PaymentType: 'instant',
    GLAccount: 'GLACC14',
    status: 'Active',
    ShippingAddress: {
      Street: '140 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100014',
      State: 'CA',
      EmailAddress: 'shipping14@company.com',
      PhoneNumber: '9999999914'
    },
    BillingAddress: {
      Street: '140 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200014',
      State: 'CA',
      EmailAddress: 'billing14@company.com',
      PhoneNumber: '8888888814'
    },
    BankHolderName: 'Bank Holder 14',
    AccountNumber: 'ACC1234567814',
    ReAccountNumber: 'ACC1234567814',
    BankIFSC: 'IFSC000014',
    CodeName: 'CODE14',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 14',
      ContactNumber: '1111111114',
      EmailAddress: 'primary14@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 14',
      ContactNumber: '2222222214',
      EmailAddress: 'secondary14@company.com'
    },
    InvoiceSendEmail: true,
    InvoiceSendWhatsapp: false,
    ThirdPartyPayment: false,
    TaxApplicable: true,
    BrandingPromotions: true
  },
  {
    EntityName: 'company',
    BusinessCode: 'OS0015',
    CompanyName: 'Company 15',
    BusinessPartnerName: 'Partner 15',
    BPUID: 'BP-00015',
    BillPolicy: 'Vendor',
    TAXVAT: '90000000015',
    EmailAddress: 'partner15@example.com',
    PhoneNumber: '9000000015',
    PaymentType: 'credit',
    GLAccount: 'GLACC15',
    status: 'Inactive',
    ShippingAddress: {
      Street: '150 Main St',
      Country: 'USA',
      City: 'CityName',
      Zip: '100015',
      State: 'CA',
      EmailAddress: 'shipping15@company.com',
      PhoneNumber: '9999999915'
    },
    BillingAddress: {
      Street: '150 Finance St',
      Country: 'USA',
      City: 'CityName',
      Zip: '200015',
      State: 'CA',
      EmailAddress: 'billing15@company.com',
      PhoneNumber: '8888888815'
    },
    BankHolderName: 'Bank Holder 15',
    AccountNumber: 'ACC1234567815',
    ReAccountNumber: 'ACC1234567815',
    BankIFSC: 'IFSC000015',
    CodeName: 'CODE15',
    Currency: 'USD',
    AccountType: 'Current',
    Country: 'USA',
    PrimaryResponder: {
      Name: 'Primary Responder 15',
      ContactNumber: '1111111115',
      EmailAddress: 'primary15@company.com'
    },
    SecondaryResponder: {
      Name: 'Secondary Responder 15',
      ContactNumber: '2222222215',
      EmailAddress: 'secondary15@company.com'
    },
    InvoiceSendEmail: false,
    InvoiceSendWhatsapp: true,
    ThirdPartyPayment: false,
    TaxApplicable: false,
    BrandingPromotions: false
  }
])

 useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDeleteModalOpen) {
        closeDeleteModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isDeleteModalOpen]);

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeDeleteModal();
    }
  };

 // Open delete confirmation modal
  const openDeleteModal = (partner) => {
    setPartnerToDelete(partner);
    setIsDeleteModalOpen(true);
  };

  // Close modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setPartnerToDelete(null);
  };

  function convertArrayOfObjectsToCSV(array) {
	let result;

	const columnDelimiter = ',';
	const lineDelimiter = '\n';
	const keys = Object.keys(data[0]);

	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;

	array.forEach(item => {
		let ctr = 0;
		keys.forEach(key => {
			if (ctr > 0) result += columnDelimiter;

			result += item[key];
			
			ctr++;
		});
		result += lineDelimiter;
	});

	return result;
}


function downloadCSV(array) {
	const link = document.createElement('a');
	let csv = convertArrayOfObjectsToCSV(array);
	if (csv == null) return;

	const filename = 'export.csv';

	if (!csv.match(/^data:text\/csv/i)) {
		csv = `data:text/csv;charset=utf-8,${csv}`;
	}

	link.setAttribute('href', encodeURI(csv));
	link.setAttribute('download', filename);
	link.click();
}

  // Handle actual deletion
  const handleConfirmDelete = useCallback(() => {
    if (partnerToDelete) {
      const updatedData = data.filter(item => item.BPUID !== partnerToDelete.BPUID);
      setData(updatedData);
      closeDeleteModal();
    }
  }, [partnerToDelete, data]);

  const filteredData = useMemo(() => {
  return data.filter((item) =>
    item.BusinessPartnerName?.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
    item.PhoneNumber?.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
}, [debouncedQuery,data]);
  return (
    <div className="bg-[#f1f3ff] w-full h-full p-5">
      {/* background container */}
      <div className="w-full h-full bg-white rounded-sm border border-[#C3C0C0] shadow-[0px_0px_9px_1px_rgba(0,0,0,0.09)] p-5">
        {/*Business Partner section and add button section */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-3xl font-inter font-bold">Business Partner</h2>
          <Button className="w-fit gap-2 items-center rounded-sm  py-3 px-4 bg-primary-blue text-white" onClick={() => {navigate('/businesspartner/creataBussinesspartner')}}>
            <FaCirclePlus size={20} /> Add BP
          </Button>
        </div>
        <hr className="border-0 h-px bg-gray-300" />
        {/*Search button section and other button section */}
        <div className="flex items-center justify-between my-3">
          <div>
            <label className="flex items-center gap-2 w-90 max-w-[90%] max-md:w-[250px] md:max-w-[400px] px-2 py-2 bg-white border border-gray-300 rounded-sm  focus-within:ring-2 focus-within:ring-primary-blue focus-within:border-blue-500 focus-within:bg-[#a1aaef23] transition-all">
              {/* Search Icon */}
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>

              {/* Input Field */}
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="grow focus:outline-none placeholder:text-gray-400 text-gray-700"
                placeholder="Search by Customer Name or Phone Number"
                aria-label="Search customers"
              />

              {/* Keyboard Shortcut */}
              <div className="flex gap-1 max-md:hidden">
                <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-200 rounded-md text-gray-500">
                  Ctrl
                </kbd>
                <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-200 rounded-md text-gray-500">
                  K
                </kbd>
              </div>
            </label>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="px-3 gap-2 font-inter rounded-sm transition-all" onClick={() => {console.log("Filter clicked")}}
            >
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 6.94C3.5 6.52346 3.5 6.31519 3.58106 6.15609C3.65237 6.01615 3.76615 5.90237 3.90609 5.83106C4.06519 5.75 4.27346 5.75 4.69 5.75H17.185C17.6016 5.75 17.8098 5.75 17.9689 5.83106C18.1089 5.90237 18.2226 6.01615 18.2939 6.15609C18.375 6.31519 18.375 6.52346 18.375 6.94V7.43786C18.375 7.63778 18.375 7.73774 18.3506 7.83069C18.3289 7.91306 18.2933 7.99109 18.2452 8.0614C18.191 8.14073 18.1154 8.2062 17.9644 8.33713L13.2075 12.4597C13.0564 12.5906 12.9809 12.6562 12.9267 12.7354C12.8786 12.8058 12.843 12.8838 12.8213 12.9662C12.7969 13.0591 12.7969 13.1591 12.7969 13.359V17.2472C12.7969 17.3926 12.7969 17.4653 12.7734 17.5282C12.7527 17.5838 12.719 17.6336 12.6751 17.6734C12.6254 17.7186 12.5579 17.7456 12.4228 17.7996L9.89409 18.8111C9.62076 18.9205 9.48406 18.9751 9.37434 18.9523C9.27839 18.9324 9.19419 18.8754 9.14004 18.7937C9.07812 18.7003 9.07812 18.5531 9.07812 18.2587V13.359C9.07812 13.1591 9.07812 13.0591 9.05369 12.9662C9.03205 12.8838 8.99642 12.8058 8.94835 12.7354C8.89411 12.6562 8.81857 12.5906 8.66749 12.4597L3.91063 8.33713C3.75955 8.2062 3.68402 8.14073 3.62978 8.0614C3.58171 7.99109 3.54608 7.91306 3.52443 7.83069C3.5 7.73774 3.5 7.63778 3.5 7.43786V6.94Z"
                  fill="#A1AAEF"
                  hover:fill="currentcolor"
                  stroke="#003366"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Filter
            </Button>
            <Button
              variant="secondary"
              className="px-3 font-inter rounded-sm transition-all"
              onClick={() => downloadCSV(data)}
            >
              Export
            </Button>
            <Button className="px-3 font-inter rounded-sm transition-all" onClick={() => {console.log("Import clicked")}}>
              Import
            </Button>
          </div>
        </div>
        <hr className="border-0 h-px bg-gray-300" />
        <div className="w-full mt-4 overflow-x-auto">
  <div className="w-[100%] mx-auto">
    <DataTable
      direction="auto"
      fixedHeader
      highlightOnHover
      pointerOnHover
      customStyles={customStyles}
      responsive
      striped
      columns={columns}
      data={filteredData}
      pagination
      selectableRows
      sortIcon={sortIcon}
    />
  </div>
</div>
      </div>
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/35 bg-opacity-50 flex items-center justify-center z-50"
        onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete <b>{partnerToDelete?.BusinessPartnerName} (BPUID: {partnerToDelete?.BPUID}) ?</b> 
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                className="px-4 py-2"
                onClick={closeDeleteModal}
              >
                Cancel
              </Button>
              <Button
                className="px-4 py-2 bg-red-600 hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BussinessPartner;
