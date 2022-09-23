import { faker } from "@faker-js/faker";
const vinGenerator = require("vin-generator");
var moment = require("moment");
export const testCases = {
  case1: {
    case: "Creating a Cash Sale by adding DCC/GAP",
    caseNo: "case1",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "11,098.01",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "11,098.01",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "625.00",
    governmentFee: "162.01",
    serviceContract: "0",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "11,098.01",
    total: "11,098.01",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case2: {
    case: "Creating a Cash Sale by adding Service Contract",
    caseNo: "case2",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "11,118.01",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "11,118.01",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "625.00",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "0",
    inventoryTax: "29.00",
    totalSalesPrice: "11,118.01",
    total: "11,118.01",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case3: {
    case: "Creating a Cash Sale by adding TradeIn",
    caseNo: "case3",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "7,430.51",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: true,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "7,430.51",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "0",
    dccGap: "0",
    inventoryTax: "29.00",
    totalSalesPrice: "7,430.51",
    total: "7,430.51",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case4: {
    case: "Creating a Cash Sale by adding TradeIn and Service Contract",
    caseNo: "case4",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "7,680.51",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: true,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "7,680.51",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "0",
    dccGap: "0",
    inventoryTax: "29.00",
    totalSalesPrice: "7,680.51",
    total: "7,680.51",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case5: {
    case: "Creating a Cash Sale by adding Service Contract and DCC/GAP",
    caseNo: "case5",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "11,348.01",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "11,348.01",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "625.00",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "11,348.01",
    total: "11,348.01",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case6: {
    case: "Creating a Cash Sale by adding DCC/GAP and TradeIn",
    caseNo: "case6",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "7,660.51",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: true,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "7,660.51",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "0",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "7,660.51",
    total: "7,660.51",
    lienHolder: "qwerty",
    taxInclude: "no",
  },
  case7: {
    case: "Creating a BHPH sale by adding Service Contract ",
    caseNo: "case7",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "15,627.77",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "4,509.76",
    amountFinanced: "11,118.01",
    totalOfPayments: "15,627.77",
    noOfPayments: "35",
    installmentAmount: "440.99",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "0.00",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "0",
    commissionRate: "1.50%",
    commission: "$ 150.00",
    profitOnVehicle: " ",
    otherCalculation: " ",
    otherCommissionRate: " ",
    otherCommission: "$ 150",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "625.00",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "0.00",
    inventoryTax: "29.00",
    totalSalesPrice: "11,118.01",
    total: "15,627.77",
    lienHolder: "qwerty",
    taxInclude: "no",
    salesTaxMonthly: "0",
  },
  case8: {
    case: "Creating a BHPH Sale by adding DCC/GAP",
    caseNo: "case8",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "15,599.57",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "4,501.56",
    amountFinanced: "11,098.01",
    totalOfPayments: "15,599.57",
    noOfPayments: "35",
    installmentAmount: "440.20",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "0.00",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "0",
    commissionRate: "1.50%",
    commission: "$ 150.00",
    profitOnVehicle: " ",
    otherCalculation: " ",
    otherCommissionRate: " ",
    otherCommission: "$ 150",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "625.00",
    governmentFee: "162.01",
    serviceContract: "0.00",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "11,098.01",
    total: "15,599.57",
    lienHolder: "qwerty",
    taxInclude: "no",
    salesTaxMonthly: "0",
  },
  case9: {
    case: "Creating a BHPH Sale by adding TradeIn",
    caseNo: "case9",
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "10,444.45",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,013.94",
    amountFinanced: "7,430.51",
    totalOfPayments: "10,444.45",
    noOfPayments: "35",
    installmentAmount: "294.73",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: true,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "0.00",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "0",
    commissionRate: "1.50%",
    commission: "$ 150.00",
    profitOnVehicle: " ",
    otherCalculation: " ",
    otherCommissionRate: " ",
    otherCommission: "$ 150",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "0.00",
    dccGap: "0.00",
    inventoryTax: "29.00",
    totalSalesPrice: "7,430.51",
    total: "10,444.45",
    lienHolder: "qwerty",
    taxInclude: "no",
    salesTaxMonthly: "0",
  },
};

export const salesValues = {
  cash: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    sec_first_name: faker.name.firstName().replace("'", ""),
    sec_last_name: faker.name.lastName().replace("'", ""),
    sec_phone: faker.phone.number("3##-###-####"),
    sec_street: faker.address.street(),
    sec_zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "7,910.51",
    finalizeSale: true,
    saleType: "cash",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "7,910.51",
    containsDownPayment: false,
    otherThanBHPH: true,
    commissionCalculation: "0",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,769.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 195.38",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "7,910.51",
    total: "7,910.51",
    lienHolder: "qwerty",
    taxInclude: "no",
<<<<<<< HEAD
    netSellingPrice: "11,000.00",
    totalDownPayment: "3,000.00",
    totalOfTaxAndFee: "430.51",
=======
    jointCustomer: true,
>>>>>>> bd3fc78fd5b1b0ab12c2b9d274649e6e06d021ed
  },
  BHPH: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    sec_first_name: faker.name.firstName().replace("'", ""),
    sec_last_name: faker.name.lastName().replace("'", ""),
    sec_phone: faker.phone.number("3##-###-####"),
    sec_street: faker.address.street(),
    sec_zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "11,086.49",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "0",
    commissionRate: "1.50%",
    commission: "$ 150.00",
    profitOnVehicle: " ",
    otherCalculation: " ",
    otherCommissionRate: " ",
    otherCommission: " ",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "7,910.51",
    total: "11,106.49",
    lienHolder: "qwerty",
    taxInclude: "no",
    salesTaxMonthly: "0",
    jointCustomer: true,
  },
  OutsideFinance: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    sec_first_name: faker.name.firstName().replace("'", ""),
    sec_last_name: faker.name.lastName().replace("'", ""),
    sec_phone: faker.phone.number("3##-###-####"),
    sec_street: faker.address.street(),
    sec_zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "11,086.49",
    finalizeSale: true,
    saleType: "OutsideFinance",
    typeOfSale: 1,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "0",
    commissionRate: "1.50%",
    commission: "$ 150.00",
    profitOnVehicle: "2,856.00",
    otherCalculation: "$3,063.00",
    otherCommissionRate: "2.00",
    otherCommission: "$ 150.00",
    BHPH: true,
    documentaryFee: "52.00",
    salesTax: "187.50",
    governmentFee: "162.01",
    serviceContract: "250.00",
    dccGap: "230.00",
    inventoryTax: "29.00",
    totalSalesPrice: "7,910.51",
    total: "11,106.49",
    lienHolder: "qwerty",
    taxInclude: "no",
    jointCustomer: true,
  },
  Wholesale: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    sec_first_name: faker.name.firstName().replace("'", ""),
    sec_last_name: faker.name.lastName().replace("'", ""),
    sec_phone: faker.phone.number("3##-###-####"),
    sec_street: faker.address.street(),
    sec_zipcode: "75901",
    full_name: "xyz",
    bhphOrOutsideFinance: false,
    vehicle_price: "10,000.00",
    totalSalePrice: "7,480.00",
    finalizeSale: true,
    saleType: "Wholesale",
    typeOfSale: 3,
    apr: "24.82",
    financeCharge: "3,195.98",
    amountFinanced: "7,890.51",
    totalOfPayments: "11,086.49",
    noOfPayments: "35",
    installmentAmount: "312.97",
    dealerTradeInOffer: "7,000.00",
    payOffLoanBalance: "2,000.00",
    cashPaidToBuyer: "2,000.00",
    actualCashValue: "8,000.00",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInStock: "",
    tradeVehicleMileage: "",
    tradeInVehiclelicensePlate: " N/A ",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    salesPerson2: "clearent",
    deffDownpaymentContains: false,
    downPayment: "0",
    containsDownPayment: false,
    otherThanBHPH: false,
    commissionCalculation: "7,682.00",
    commissionRate: "2.00%",
    commission: "$ 150.00",
    profitOnVehicle: "9,687.00",
    otherCalculation: "9,842.00",
    otherCommissionRate: "2.00%",
    otherCommission: "$ 196.84",
    BHPH: true,
    documentaryFee: "0.00",
    salesTax: "0.00",
    governmentFee: "0.00",
    serviceContract: "250.00",
    dccGap: "230.00",
    inventoryTax: "0.00",
    totalSalesPrice: "7,480.00",
    total: "7,480.00",
    lienHolder: "qwerty",
    taxInclude: "no",
    jointCustomer: true,
  },
};
export const inventoryValues = {
  vehicleDetails: {
    vin: vinGenerator.generateVin(),
    mileage: faker.random.numeric(5),
    vehiclePrice: faker.random.numeric(4),
    buyerFee: faker.random.numeric(2),
  },
};
