import { faker } from "@faker-js/faker";
export const verifyScreen = {
  case1: {
    first_name: "Dorkkke",
    last_name: "Ok",
    work_phone: "321-433-6567",
    home_phone: "",
    mobile_phone: "123-221-2222",
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
    vehicleSalePrice: 10000,
    salesTax: "187.50",
    salesPrice: 7476.0,
    otherCharges: "288.50",
    totalOfGovernmentFees: "288.50",
    downpayment: 10913.5,
    apr: "26.99(%)",
    financeCharge: "($)7,324.56",
    amountFinanced: "($)16,468.50",
    totalOfPayments: "($)23,793.06",
    totalSalePrice: "($)23,793.06",
    noOfPayments: "35",
    installmentAmount: "($)672.24",
  },
  case2: {
    first_name: "Dorkkke",
    last_name: "Ok",
    work_phone: "321-433-6567",
    home_phone: "",
    mobile_phone: "123-221-2222",
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
    vehicleSalePrice: 10000,
    salesTax: "187.50",
    salesPrice: 7476.0,
    otherCharges: "288.50",
    totalOfGovernmentFees: "288.50",
    downpayment: 10913.5,
    apr: "24.82(%)",
    financeCharge: "($)6,695.11",
    amountFinanced: "($)16,468.50",
    totalOfPayments: "($)23,163.61",
    totalSalePrice: "($)23,163.61",
    noOfPayments: "35",
    installmentAmount: "($)653.22",
  },
    //cash type
  case3: {
    first_name: "Dorkkke",     
    last_name: "Ok",
    work_phone: "321-433-6567",
    home_phone: "",
    mobile_phone: "123-221-2222",
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
    totalSalePrice: "($)23,163.61",
  },
    //bhph type
  case4: {
    first_name: "Dorkkke",
    last_name: "Ok",
    work_phone: "321-433-6567",
    home_phone: "",
    mobile_phone: "123-221-2222",
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
    vehicleSalePrice: 10000,
    salesTax: "187.50",
    salesPrice: 7476.0,
    otherCharges: "288.50",
    totalOfGovernmentFees: "288.50",
    downpayment: 10913.5,
    apr: "22.77(%)",
    financeCharge: "($)4,268.48",
    amountFinanced: "($)11,143.50",
    totalOfPayments: "($)15,411.98",
    totalSalePrice: "($)15,411.98",
    noOfPayments: "35",
    installmentAmount: "($)434.58",
  },
  
    //outside type
  case5: {
    first_name: "Dorkkke",
    last_name: "Ok",
    work_phone: "321-433-6567",
    home_phone: "",
    mobile_phone: "123-221-2222",
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
    vehicleSalePrice: 10000,
    salesTax: "187.50",
    salesPrice: 7476.0,
    otherCharges: "288.50",
    totalOfGovernmentFees: "288.50",
    downpayment: 10913.5,
    apr: "24.82(%)",
    financeCharge: "($)4,522.12",
    amountFinanced: "($)11,143.50",
    totalOfPayments: "($)15,665.62",
    totalSalePrice: "($)15,665.62",
    noOfPayments: "35",
    installmentAmount: "($)442.00",
   }
  };

export const quotationCases1 = {
  case1: {
    vehicleSalePrice: 10000,
    salesTax: "187.50",
    salesPrice: 7476.0,
    otherCharges: "288.50",
    totalOfGovernmentFees: "288.50",
    downpayment: 10913.5,
  },
};

export const salesRecapSheet = {
  case1: {
    full_name: "Dorkkke Ok",
    full_address: " Aser Addison Texas ",
  },
};
export const dealWorksheet ={
  //cash
  case1: {
    salesPrice: "10,000.00",
    documentaryFee: "150.00",
    salesTax : "625.00",
    governmentFee: "113.50",
    serviceContract: "0.00",
    dccGap: "230.00",
    inventoryTax: "25.00",
    totalSalesPrice: "11,143.50",
    cashDownpayment: "11,143.50",
    total: "11,143.50"
  },
  //outside
  case2: {
    salesPrice: "10,000.00",
    documentaryFee: "150.00",
    salesTax : "625.00",
    governmentFee: "113.50",
    serviceContract: "0.00",
    dccGap: "230.00",
    inventoryTax: "25.00",
    totalSalesPrice: "11,143.50",
    cashDownpayment: "0.00",
    amountFinanced: "11,143.50",
    deferredDownpayment: "0.00",
    financing: "4,600.01",
    total: "15,743.51"
  },
  //bhph
  case3: {
    salesPrice: "10,000.00",
    documentaryFee: "150.00",
    salesTax : "625.00",
    governmentFee: "113.50",      serviceContract: "0.00",
    dccGap: "230.00",
    inventoryTax: "25.00",
    totalSalesPrice: "11,143.50",
    cashDownpayment: "0.00",
    amountFinanced: "11,143.50",
    deferredDownpayment: "0.00",
    financing: "4,268.48",
    total: "15,411.98"
  },
     //wholesale
  case4: {
    salesPrice: "10,000.00",
    documentaryFee: "0.00",
    salesTax : "0.00",
    governmentFee: "0.00",
    serviceContract: "0.00",
    dccGap: "230.00",
    inventoryTax: "0.00",
    totalSalesPrice: "10,230.00",
    cashDownpayment: "10,230.00",
    total: "10,230.00"
  },
  
};

export const ofacCheck ={
  ssn: {
    ssn_number: "589-17-6824",
    first_name: "Thammudu",
    last_name: "Seenu",
    work_phone: "321-433-6567",
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75001"
  },

  ofacName: {
   ssn_number: faker.phone.number("3##-###-###"),
    first_name: "ZAYDAN",
    last_name: "MUHAMMAD",
    work_phone: "321-433-6567",
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75001"
  }
}