const columns = [
  { name: "Date", uid: "date", sortable: true },
  { name: "Scheduled", uid: "scheduled", sortable: true },
  { name: "Check In", uid: "check_in", sortable: true },
  { name: "Check Out", uid: "check_out", sortable: true },
  { name: "Work Hrs", uid: "hrs" },
  { name: "Status", uid: "status", sortable: true },
  { name: "Difference", uid: "difference" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 2,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    check_out: "06:00 PM",
    is_earlyout: "earlyout",
    hrs: "12:00 hrs",
    status: "active",
    difference: "03.00 hrs"
  },
  {
    id: 3,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 4,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 5,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    check_out: "06:00 PM",
    is_earlyout: "earlyout",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 6,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 7,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    check_out: "06:00 PM",
    is_earlyout: "earlyout",
    hrs: "12:00 hrs",
    status: "active",
    difference: "03.00 hrs"
  },
  {
    id: 8,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 9,
    date: "Wed, 15 May 2084",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    is_earlyin: "earlyin",
    check_out: "06:00 PM",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
  {
    id: 10,
    date: "Wed, 15 May 2024",
    scheduled: "09:00am - 06:00pm",
    check_in: "08:00 AM",
    check_out: "06:00 PM",
    is_earlyout: "earlyout",
    hrs: "12:00 hrs",
    status: "active",
    difference: null
  },
];

export { columns, users, statusOptions };


const columnsTravel = [
  {name: "TRAVEL NAME", uid: "travel_name", sortable: true},
  {name: "SMA ID", uid: "sma_id", sortable: true},
  {name: "SURNAME", uid: "surname", sortable: true},
  {name: "GIVEN NAME", uid: "given_name", sortable: true},
  {name: "RANK", uid: "rank", sortable: true},
  {name: "TYPE", uid: "type", sortable: true},
  {name: "VESSEL", uid: "vessel", sortable: true},
  {name: "DOB", uid: "dob", sortable: true},
  {name: "DOT", uid: "dot", sortable: true},
  {name: "SECTOR", uid: "sector", sortable: true},
  {name: "INVOICE NO", uid: "invoice_no",sortable: true},
  {name: "INVOICE DATE", uid: "invoice_date",sortable: true},
  {name: "AMOUNT", uid: "amount",sortable: true},
  {name: "PURPOSE", uid: "purpose",sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const TravelList = [
  {
    id: 1,
    travel_name:"Zen Consultant",
    sma_id: "24621",
    surname: "KRISHNAN",
    given_name: "VIJAY",
    rank: "C/E",
    type: "MT",
    vessel: "SMYRNI",
    dob: "08/03/2023",
    dot: "14/03/2023",
    sector:"TCR-MAA",
    invoice_no: "DS24/89",
    invoice_date: "14/03/2023",
    amount: "9876",
    purpose: "SIGN OFF",
  },
  {
    id: 2,
    travel_name:"Cooltrip Consultant",
    sma_id: "567",
    surname: "WILSON",
    given_name: "ARUL",
    rank: "CLEANER",
    type: "MV",
    vessel: "OTZIAS",
    dob: "20/01/2024",
    dot: "25/01/2024",
    sector:"COK/MAA",
    invoice_no: "DS24/103",
    invoice_date: "20/02/2023",
    amount: "3457",
    purpose: "COE,SIGN OFF",
  },
  {
    id: 3,
    travel_name:"Zen Consultant",
    sma_id: "378",
    surname: "NIVAS",
    given_name: "ALBERT",
    rank: "ETO",
    type: "MT",
    vessel: "SMYRNI",
    dob: "08/03/2023",
    dot: "14/03/2023",
    sector:"TCR-MAA",
    invoice_no: "DS24/103",
    invoice_date: "14/03/2023",
    amount: "23568",
    purpose: "PEME",
  },
  {
    id: 4,
    travel_name:"Cooltrip Consultant",
    sma_id: "788",
    surname: "KRISHNAN",
    given_name: "VIJAY",
    rank: "C/E",
    type: "MT",
    vessel: "SMYRNI",
    dob: "08/03/2023",
    dot: "14/03/2023",
    sector:"TCR-MAA",
    invoice_no: "DS24/988",
    invoice_date: "18/04/2023",
    amount: "9876",
    purpose: "SIGN OFF",
  },


  
];

const columnsPatient = [

  {name: "Register ID", uid: "reg_number", sortable: true},
  {name: "Name", uid: "patient_name", sortable: true},
  {name: "Mobile Number", uid: "mob_num", sortable: true},
  {name: "Email", uid: "email", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const listPatient = [
  {
    id: 1,
    reg_number:"PID123456789",
    patient_name:"John Doe",
    mob_num: "1234567890",
    email: "john@example.com",
  },

  {
    id: 2,
    reg_number:"PID123456790",
    patient_name:"Shawty",
    mob_num: "4567890478",
    email: "shawty@example.com",
  },

  {
    id: 3,
    reg_number:"PID123456791",
    patient_name:"Peter",
    mob_num: "3456789056",
    email: "peter@example.com",
  },



  {
    id: 4,
    reg_number:"PID123456792",
    patient_name:"Jane Smith",
    mob_num: "0987654321",
    email: "jane@example.com",
  },

  {
    id: 5,
    reg_number:"PID123456793",
    patient_name:"Alice Johnson",
    mob_num: "1112223333",
    email: "alice@example.com",
  },


]

const columnsAdmission = [

  {name: "Patient ID", uid: "re_number", sortable: true},
  {name: "Admission ID", uid: "ad_id", sortable: true},
  {name: "Doctor Name", uid: "doc_name", sortable: true},
  {name: "Admission Date", uid: "ad_date", sortable: true},
  {name: "Discharge Date", uid: "dis_date", sortable: true},
  {name: "Status", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const listAdmission = [
  {
    id: 1,
    ad_id:"A12345",
    re_number:"PID123456789",
    doc_name: "Michael Wilson",
    ad_date: "2024-01-01",
    dis_date: "2024-01-15",
    status: "Not Active",
  },
]

const columnsConsultation = [


  {name: "Patient ID", uid: "reg_num", sortable: true},
  {name: "Doctor Name", uid: "doc_name", sortable: true},
  {name: "Doctor's Department", uid: "doc_dpt", sortable: true},
  {name: "Date", uid: "date", sortable: true},
  {name: "Time", uid: "time", sortable: true},
  {name: "Notes", uid: "notes", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listConsultation = [
  {
    id: 1,
    reg_num: "PID123408535",
    doc_name: "Michael Wilson",
    doc_dpt: "Pediatrics",
    date: "2024-01-15",
    time: "2.00PM",
  },
]

const columnsBill = [

  {name: "Patient ID", uid: "pati_id", sortable: true},
  {name: "Bill ID", uid: "bill_id", sortable: true},
  {name: "Patient Name", uid: "patient_name_ip", sortable: true},
  {name: "Status", uid: "stat", sortable: true},
  {name: "Bill Date", uid: "bill_date", sortable: true},
  {name: "Amount", uid: "amt", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listBill = [
  {
    id: 1,
    bill_id: 'B001',
    pati_id: 'PID123456789',
    patient_name_ip: 'John Doe',
    stat: 'Paid',
    bill_date: '2023-07-15',
    amt: '$200.00',
    
  },
]



const ColumnIpPatient = [
  
  {name: "Patient ID", uid: "patient_id_ip", sortable: true},
  {name: "Patient Name", uid: "patient_name_ip", sortable: true},
  {name: "Doctor", uid: "doctor_ip", sortable: true},
  {name: "Admission Date", uid: "admission_date_ip", sortable: true},
  {name: "Payment Status", uid:"cash"},
  {name: "ACTIONS", uid: "actions"},
];




const ListIpPatient = [

  {
    id: 1,
    patient_id_ip:"PID123456789",
    patient_name_ip:"John Doe",
    doctor_ip: "Abinaya",
    admission_date_ip: "01-06-2024",
    cash:"Paid",
  },
  {
    id: 2,
    room_num_ip: "GEN010",
    patient_id_ip:"PID12356657",
    patient_name_ip:"Evik",
    doctor_ip: "Siva Kumar",
    admission_date_ip: "17-06-2024",
    cash:"Unpaid",
  },
  {
    id: 3,
    room_num_ip: "NICU001",
    patient_id_ip:"PID123408535",
    patient_name_ip:"Tishara",
    doctor_ip: "Raja sekar",
    admission_date_ip: "25-06-2024",
    cash:"Paid",
  },
  {
    id: 4,
    room_num_ip: "ICU002",
    patient_id_ip:"PID123579883",
    patient_name_ip:"Sastika",
    doctor_ip: "Siva kumar",
    admission_date_ip: "15-07-2024",
    cash:"Paid",
  },
  {
    id: 5,
    room_num_ip: "GEN016",
    patient_id_ip:"PID12398776",
    patient_name_ip:"Yathvik",
    doctor_ip: "Abinaya",
    admission_date_ip: "20-07-2024",
    cash:"Unpaid",
  }

]

const ColumnOpPatient = [
  {name:"Room No",uid:"room_num_ip",sortable:true},
  {name:"Patient ID", uid:"patient_id_ip", sortable:true},
  {name:"Patient Name", uid:"patient_name_ip", sortable:true},
  {name:"Surgeon", uid:"surgeon_op", sortable:true},
  {name:"Check-out Date", uid:"admission_date_op", sortable:true},
  {name:"ACTIONS", uid:"actions"},
]


const ColumnAmount = [

  {name: "Patient ID", uid: "reg", sortable: true},
  {name: "Receipt No", uid: "rep_no", sortable: true},
  {name: "Date", uid: "date", sortable: true},
  {name: "Amount", uid: "amount", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const ListAmount = [

  {
    id: 1,
    reg:"PID123408535",
    rep_no: "001",
    date: "2024-01-15",
    amount: 250.00,
    
  },
];

const ColumnReport = [

  {name: "Patient ID", uid: "pa", sortable: true},
  {name: "Report ID", uid: "re", sortable: true},
  {name: "Report Name", uid: "repo_na", sortable: true},
  {name: "Report Generation Date", uid: "repo_date", sortable: true},
  // {name: "Export As", uid: "expo", sortable: true},
  {name: "Export As", uid: "actions"},
];

const listReport = [

  {
     id: 1,
     pa: "PID123408535",
     re: "R001",
     repo_na: "Annual Health Report",
     repo_date: "2024-01-15",
     
     
  },

  {
    id:2,
    pa: "PID123408035",
    re: "R002",
    repo_na: "Blood Test Report",
    repo_date: "2024-02-20",
   
  }
];

const ColumnImageorder = [


  {name: "Patient ID", uid: "pt", sortable: true},
  {name: "Test Name", uid: "test_name", sortable: true},
  {name: "Test Date", uid: "test_date", sortable: true},
  {name: "Doctor's Name", uid: "doc_name", sortable: true},
  {name: "Tech Name", uid: "tech_name", sortable: true},
  {name: "Report Date", uid: "report_date", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listImageorder = [

  {
     id: 1,
     pt:"PID123408535",
      "test_name": "ECG",
      "test_date": "2024-01-15",
      "doc_name": "Dr. John Smith",
      "tech_name": "Alice Johnson",
      "report_date": "2024-01-16"
     
  },

];


const ColumnLab = [
  {name: "Patient ID", uid: "pi", sortable: true},
  {name: "Investigation/Test", uid: "invest", sortable: true},
  {name: "Test Date", uid: "tst_date", sortable: true},
  {name: "Doctor's Name", uid: "dc_name", sortable: true},
  {name: "Lab Tech Name", uid: "labtechname", sortable: true},
  {name: "Report Date", uid: "reportdate", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];


const listLab = [

  {
     id: 1,
     pi:"PID123408580",
     "invest": "Blood Test",
     "tst_date": "2024-01-15",
     "dc_name": "Dr. John Smith",
     "labtechname": "Alice Johnson",
     "reportdate": "2024-01-16"
     
  },
];

const ColumnVaccination = [

  {name: "Sl.No", uid: "slNo", sortable: true},
  {name: "Patient ID", uid: "ID", sortable: true},
  {name: "UHID", uid: "uhid", sortable: true},
  {name: "Patient Name", uid: "patient_name", sortable: true},
  {name: "Report Date", uid: "report_date", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listVaccination = [

  {

    id: 1,
    "slNo":"01",
    "ID": "PID123456790",
    "uhid": "12345678901234",
    "patient_name": "Kumar",
    "report_date": "2023-01-15"
  },
  
  {

    id: 2,
    "slNo":"02",
    "ID": "PID123456791",
    "uhid": "12345678901235",
    "patient_name": "Prakash",
    "report_date": "2023-01-15"
  },
  
  {

    id: 3,
    "slNo":"03",
    "ID": "PID123456792",
    "uhid": "12345678901236",
    "patient_name": "Mani",
    "report_date": "2023-01-15"
  },

];


const ColumnVac = [

  {name: "Patient ID", uid: "pd", sortable: true},
  {name: "Vaccination Name", uid: "vac_name", sortable: true},
  {name: "Serial No", uid: "se_no", sortable: true},
  {name: "Dose No", uid: "does_name", sortable: true},
  {name: "Dose Given Date", uid: "giv_date", sortable: true},
  {name: "Expiry Date", uid: "ex_date", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listVac = [

  {

    id: 1,
    "pd":"PID123456790",
    "vac_name": "COVID-19 Vaccine",
    "se_no": "123456",
    "does_name": "Dose 1",
    "giv_date": "2023-01-15",
    "ex_date": "2024-01-15"
  },

  {

    id: 2,
    "pd":"PID123456770",
    vac_name: "Influenza",
    se_no: "67890",
    does_name: "Dose 1",
    giv_date: "2023-02-20",
    ex_date: "2024-02-20"
  },

  {

    id: 3,
    "pd":"PID123456780",
    vac_name: "Hepatitis B",
    se_no: "111213",
    does_name: "Dose 2",
    giv_date: "2023-03-05",
    ex_date: "2024-03-05"
  },

  {

    id: 3,
    "pd":"PID123456700",
    vac_name: "COVID-19",
        se_no: "141516",
        does_name: "Dose 2",
        giv_date: "2023-04-10",
        ex_date: "2024-04-10"
  },

];


const ColumnSupplyPurchaseEntry = [

  {name: "Item Name", uid: "sup_item_name", sortable: true},
  {name: "Item category", uid: "sup_item_category", sortable: true},
  {name: "Quantity", uid: "sup_quantity", sortable: true},
  {name: "Purchase Price", uid: "sup_purchase_price", sortable: true},
  {name: "Created On", uid: "sup_created_on", sortable: true},
  {name: "Status", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];


const listSupplyPurchaseEntry = [

  {
    id: 1,
    sup_item_name: "Medicines",
    sup_item_category:"Paracetamol",
    sup_quantity:"100",
    sup_purchase_price: "2500",
    sup_created_on: "01-06-2024",
    status:"Pending"
  },
  {
    id: 2,
    sup_item_name: "Equipment",
    sup_item_category:"Bandages",
    sup_quantity:"50",
    sup_purchase_price: "4000",
    sup_created_on: "21-06-2024",
    status:"Purchased"
  },
  {
    id: 3,
    sup_item_name: "Supplies",
    sup_item_category:"Syringes",
    sup_quantity:"60",
    sup_purchase_price: "3500",
    sup_created_on: "30-06-2024",
     status:"Pending"
  },
  {
    id: 4,
    sup_item_name: "Vaccines",
    sup_item_category:"Thermometer",
    sup_quantity:"80",
    sup_purchase_price: "5500",
    sup_created_on: "11-07-2024",
    status:"Purchased"
  },
  {
    id: 5,
    sup_item_name: "Devices",
    sup_item_category:"Stethoscope",
    sup_quantity:"20",
    sup_purchase_price: "9000",
    sup_created_on: "18-07-2024",
     status:"Pending"
  },
];


const ColumnMedicinePurchaseEntry = [

  {name: "Item Name", uid: "med_item_name", sortable: true},
  {name: "Item category", uid: "med_item_category", sortable: true},
  {name: "Quantity", uid: "med_quantity", sortable: true},
  {name: "Purchase Price", uid: "med_purchase_price", sortable: true},
  {name: "Created On", uid: "med_created_on", sortable: true},
  {name: "Status", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listMedicinePurchaseEntry = [

  {
    id: 1,
    med_item_name: "Vitamin",
    med_item_category:"Vitamin C",
    med_quantity:"100",
    med_purchase_price: "3000",
    med_created_on: "01-06-2024",
    status:"Pending"
  },
  {
    id: 2,
    med_item_name: "Antifungal",
    med_item_category:"Fluconazole",
    med_quantity:"50",
    med_purchase_price: "2500",
    med_created_on: "10-06-2024",
    status:"Purchased"
  },
  {
    id: 3,
    med_item_name: "Antibiotic",
    med_item_category:"Amoxicillin",
    med_quantity:"80",
    med_purchase_price: "4000",
    med_created_on: "15-06-2024",
    status:"Pending"
  },
  {
    id: 4,
    med_item_name: "Antiviral",
    med_item_category:"Acyclovir",
    med_quantity:"120",
    med_purchase_price: "4500",
    med_created_on: "11-07-2024",
     status:"Purchased"
  },
  {
    id: 5,
    med_item_name: "Antifungal",
    med_item_category:"Fluconazole",
    med_quantity:"300",
    med_purchase_price: "5500",
    med_created_on: "18-07-2024",
    status:"Pending"
  },
];

const ColumnIssuedItem = [

  {name: "Item Name", uid: "issue_item_name", sortable: true},
  {name: "Item category", uid: "issue_item_category", sortable: true},
  {name: "Issue Date", uid: "issue_date", sortable: true},
  {name: "Patient Id", uid: "issue_patient_id", sortable: true},
  {name: "Quantity", uid: "issue_quantity", sortable: true},
  {name: "Status", uid: "issue_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listIssuedItem = [

  {
    id: 1,
    issue_item_name: "Vitamin",
    issue_item_category:"Vitamin C",
    issue_date:"01-06-2024",
    issue_patient_id: "PID0976789",
    issue_quantity: "10",
    issue_status: "Issued",
  },
  {
    id: 2,
    issue_item_name: "Antiviral",
    issue_item_category:"Acyclovir",
    issue_date:"13-06-2024",
    issue_patient_id: "PID0246568",
    issue_quantity: "12",
    issue_status: "Issued",
  },
  {
    id: 3,
    issue_item_name: "Vitamin",
    issue_item_category:"Vitamin C",
    issue_date:"22-06-2024",
    issue_patient_id: "PID087544",
    issue_quantity: "20",
    issue_status: "Issued",
  },
  {
    id: 4,
    issue_item_name: "Antifungal",
    issue_item_category:"Fluconazole",
    issue_date:"10-07-2024",
    issue_patient_id: "PID908638",
    issue_quantity: "10",
    issue_status: "Issued",
  },
  {
    id: 5,
    issue_item_name: "Antibiotic",
    issue_item_category:"Amoxicillin",
    issue_date:"20-07-2024",
    issue_patient_id: "PID0789678",
    issue_quantity: "15",
    issue_status: "Issued",
  },
];

const ColumnReturnItem = [

  {name: "Item Name", uid: "return_item_name", sortable: true},
  {name: "Item category", uid: "return_item_category", sortable: true},
  {name: "Issue Date", uid: "return_issue_date", sortable: true},
  {name: "Patient Id", uid: "return_patient_id", sortable: true},
  {name: "Return Date", uid: "return_date", sortable: true},
  {name: "Quantity", uid: "return_quantity", sortable: true},
  {name: "Status", uid: "return_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listReturnItem = [

  {
    id: 1,
    return_item_name: "Vitamin",
    return_item_category:"Vitamin C",
    return_issue_date:"01-06-2024",
    return_patient_id: "PID023783",
    return_date:"05-06-2024",
    return_quantity: "10",
    return_status: "Retured",
  },
  {
    id: 2,
    return_item_name: "Antifungal",
    return_item_category:"Fluconazole",
    return_issue_date:"25-06-2024",
    return_patient_id: "PID097893",
    return_date:"28-06-2024",
    return_quantity: "10",
    return_status: "Retured",
  },
  {
    id: 3,
    return_item_name: "Supplies",
    return_item_category:"Syringes",
    return_issue_date:"29-06-2024",
    return_patient_id: "PID097383",
    return_date:"01-07-2024",
    return_quantity: "04",
    return_status: "Retured",
  },
  {
    id: 4,
    return_item_name: "Antibiotic",
    return_item_category:"Amoxicillin",
    return_issue_date:"01-06-2024",
    return_patient_id: "PID097678",
    return_date:"01-06-2024",
    return_quantity: "10",
    return_status: "Retured",
  },
  {
    id: 5,
    return_item_name: "Vitamin",
    return_item_category:"Vitamin C",
    return_issue_date:"01-06-2024",
    return_patient_id: "PID097678",
    return_date:"01-06-2024",
    return_quantity: "20",
    return_status: "Retured",
  }
];

const Columnclinical = [

  {name: "Patient ID", uid: "pi_id", sortable: true},
  {name: "Name of the surgery", uid: "surg", sortable: true},
  {name: "Condition", uid: "con", sortable: true},
  {name: "Hospital Name", uid: "hos_name", sortable: true},
  {name: "Place", uid: "place", sortable: true},
  {name: "Date of the surgery", uid: "da_sur", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];


const listclinical = [

  {
    id: 1,
    pi_id: 'PID123408535',
    surg: 'Cholecystectomy',
    con: 'Gallstones',
    hos_name: 'Metro General',
    place: 'Los Angeles',
    da_sur: '2023-03-22'
  },

];


const ColumnInventoryManagement = [

  {name: "Item Name", uid: "im_item_name", sortable: true},
  {name: "Item category", uid: "im_item_category", sortable: true},
  {name: "Patient Id", uid: "im_patient_id", sortable: true},
  {name: "Quantity", uid: "im_quantity", sortable: true},
  {name: "Date", uid: "im_issue_date", sortable: true},
  {name: "Status", uid: "im_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const listInventoryManagement = [

  {
    id: 1,
    im_item_name: "Vitamin",
    im_item_category:"Vitamin C",
    im_patient_id:"PID023783",
    im_quantity: "10",
    im_issue_date:"01-06-2024",
    im_status: "Issued",
  },
  {
    id: 2,
    im_item_name: "Supplies",
    im_item_category:"Syringes",
    im_patient_id:"PID097383",
    im_quantity: "04",
    im_quantity: "60",
    im_issue_date:"01-07-2024",
    im_status: "Purchased",
  },
  {
    id: 3,
    im_item_name: "Equipment",
    im_item_category:"Bandages",
    im_patient_id:"PID097383",
    im_quantity: "50",
    im_issue_date:"07-07-2024",
    im_status: "Purchased",
  },
  {
    id: 4,
    im_item_name: "Antiviral",
    im_item_category:"Acyclovir",
    im_patient_id:"PID023783",
    im_quantity: "10",
    im_issue_date:"11-07-2024",
    im_status: "Pending",
  },
  {
    id: 5,
    im_item_name: "Vitamin",
    im_item_category:"Vitamin C",
    im_patient_id:"PID023783",
    im_quantity: "10",
    im_issue_date:"01-06-2024",
    im_status: "Retured",
  },
];



const ColumnLabReports = [

  {name: "Report Id", uid: "report_rep_id", sortable: true},
  {name: "Patient ID", uid: "report_patient_id", sortable: true},
  {name: "Patient Name", uid: "report_patient_name", sortable: true},
  {name: "Test Name", uid: "report_test_name", sortable: true},
  {name: "Report Status", uid: "report_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const listLabReports = [

  {
    id: 1,
    report_rep_id: 'RID345',
    report_patient_id: 'PID123408535',
    report_patient_name: 'John',
    report_test_name: 'Blood test',
    report_status: 'Completed',
  },
  {
    id: 2,
    report_rep_id: 'RID345',
    report_patient_id: 'PID422356',
    report_patient_name: 'Kishore',
    report_test_name: 'Sugar test',
    report_status: 'Pending',
  },
  {
    id: 3,
    report_rep_id: 'RID345',
    report_patient_id: 'PID2456788',
    report_patient_name: 'Tishara',
    report_test_name: 'Blood test',
    report_status: 'Pending',
  },
  {
    id: 4,
    report_rep_id: 'RID345',
    report_patient_id: 'PID0225678',
    report_patient_name: 'Evik',
    report_test_name: 'Sugar test',
    report_status: 'Completed',
  },
  {
    id: 5,
    report_rep_id: 'RID345',
    report_patient_id: 'PID225787',
    report_patient_name: 'Sastika',
    report_test_name: 'Blood test',
    report_status: 'Pending',
  },

];

const ColumnRadiologyReports = [

  {name: "Report Id", uid: "radio_rep_id", sortable: true},
  {name: "Patient ID", uid: "radio_patient_id", sortable: true},
  {name: "Patient Name", uid: "radio_patient_name", sortable: true},
  {name: "Test Name", uid: "radio_test_name", sortable: true},
  {name: "Report Status", uid: "radio_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const listRadioReports = [

  {
    id: 1,
    radio_rep_id: 'RIDR455',
    radio_patient_id: 'PID657655',
    radio_patient_name: 'Raja',
    radio_test_name: 'X-Rays',
    radio_status: 'Pending',
  },
  {
    id: 2,
    radio_rep_id: 'RIDR765',
    radio_patient_id: 'PID026723',
    radio_patient_name: 'Deva',
    radio_test_name: 'MRI',
    radio_status: 'Completed',
  },
  {
    id: 3,
    radio_rep_id: 'RIDR065',
    radio_patient_id: 'PID086373',
    radio_patient_name: 'Tishara',
    radio_test_name: 'CT',
    radio_status: 'Pending',
  },
  {
    id: 4,
    radio_rep_id: 'RIDR765',
    radio_patient_id: 'PID245623',
    radio_patient_name: 'Suriya',
    radio_test_name: 'Ultrasound',
    radio_status: 'Pending',
  },
  {
    id: 5,
    radio_rep_id: 'RIDR754',
    radio_patient_id: 'PID036734',
    radio_patient_name: 'Sastika',
    radio_test_name: 'MRI',
    radio_status: 'Completed',
  },

];


const ColumnEMR = [

  {name: "Report Id", uid: "emr_rep_id", sortable: true},
  {name: "Report Name", uid: "emr_rep_name", sortable: true},
  {name: "Patient ID", uid: "emr_patient_id", sortable: true},
  {name: "Patient Name", uid: "emr_patient_name", sortable: true},
  {name: "Test Name", uid: "emr_test_name", sortable: true},
  {name: "Report Status", uid: "emr_status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const listEMR = [

  {
    id: 1,
    emr_rep_id: 'RIDR455',
    emr_rep_name: 'Radiology',
    emr_patient_id: 'PID657655',
    emr_patient_name: 'Raja',
    emr_test_name: 'X-Rays',
    emr_status: 'Pending',
  },
  {
    id: 2,
    emr_rep_id: 'RID345',
    emr_rep_name: 'Lab',
    emr_patient_id: 'PID123408535',
    emr_patient_name: 'John',
    emr_test_name: 'Blood test',
    emr_status: 'Completed',
  },
  {
    id: 3,
    emr_rep_id: 'RIDR065',
    emr_rep_name: 'Radiology',
    emr_patient_id: 'PID086373',
    emr_patient_name: 'Tishara',
    emr_test_name: 'CT',
    emr_status: 'Pending',
  },
  {
    id: 4,
    emr_rep_id: 'RID765',
    emr_rep_name: 'Lab',
    emr_patient_id: 'PID245623',
    emr_patient_name: 'Kishore',
    emr_test_name: 'Sugar test',
    emr_status: 'Completed',
  },
  {
    id: 5,
    emr_rep_id: 'RIDR754',
    emr_rep_name: 'Radiology',
    emr_patient_id: 'PID036734',
    emr_patient_name: 'Sastika',
    emr_test_name: 'MRI',
    emr_status: 'Completed',
  },

]; 

const PharmacycolumnsBill = [
  {name: "S.No", uid: "s_no", sortable: true},
  {name: "Patient ID", uid: "pati_id", sortable: true},
  {name: "Patient Name", uid: "patient_name_ip", sortable: true},
  {name: "Medicine Name", uid: "medicine_name", sortable: true},
  {name: "Dosage", uid: "dosage", sortable: true},
  {name: "Dose Duration", uid: "dose_duration", sortable: true},
  {name: "Dose Time", uid: "dose_time", sortable: true},
  {name: "Dose Interval", uid: "dose_interval", sortable: true},
  {name: "ACTIONS", uid: "actions"},

];

const PharmacylistBill = [
  {
    id: 1,
    s_no: 'B001',
    pati_id: 'PID123456789',
    patient_name_ip: 'John Doe',
    medicine_name: 'Acetaminophen',
    dosage: 'oral granule',
    dose_duration: '3',
    dose_time: '10:00 AM',
    dose_interval: '5hrs',

    
  },
]

export { columnsTravel, TravelList, columnsPatient, listPatient, columnsAdmission, listAdmission, columnsConsultation, listConsultation,
  columnsBill, listBill, ColumnIpPatient, ListIpPatient, ColumnAmount, ListAmount, ColumnReport, listReport, ColumnImageorder,
  listImageorder, ColumnLab, listLab, ColumnVaccination, listVaccination, ColumnSupplyPurchaseEntry, listSupplyPurchaseEntry,
  ColumnMedicinePurchaseEntry, listMedicinePurchaseEntry, ColumnOpPatient,
   ColumnIssuedItem, listIssuedItem,
  ColumnReturnItem, listReturnItem, Columnclinical, listclinical, ColumnInventoryManagement, listInventoryManagement
  ,ColumnVac,listVac, ColumnLabReports, listLabReports, ColumnRadiologyReports, listRadioReports, ColumnEMR, listEMR,PharmacycolumnsBill,PharmacylistBill
};