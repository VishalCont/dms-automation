import { faker } from "@faker-js/faker";
const vinGenerator = require("vin-generator");
var moment = require("moment");

export const salesValues = {
  cash: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
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
  },
  BHPH: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
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
  },
  OutsideFinance: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
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
  },
  Wholesale: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
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
