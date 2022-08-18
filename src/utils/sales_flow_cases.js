import { faker } from "@faker-js/faker";
var moment = require("moment");
export const salesValues = {
  cash: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "XYZ",
    bhphOrOutsideFinance: false,
    vehicle_price: "10000.00",
    totalSalePrice: "25,676.46",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "7,383.96",
    amountFinanced: "18,292.50",
    totalOfPayments: "25,676.46",
    noOfPayments: "35",
    installmentAmount: "725.57",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInVehiclelicensePlate: "N/A",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    deffDownpaymentContains: false,
  },
  BHPH: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "XYZ",
    bhphOrOutsideFinance: false,
    vehicle_price: "10000.00",
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
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
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
    deffDownpaymentContains: false,
  },
  OutsideFInance: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "XYZ",
    bhphOrOutsideFinance: false,
    vehicle_price: "10000.00",
    totalSalePrice: "25,676.46",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "7,383.96",
    amountFinanced: "18,292.50",
    totalOfPayments: "25,676.46",
    noOfPayments: "35",
    installmentAmount: "725.57",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInVehiclelicensePlate: "N/A",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    deffDownpaymentContains: false,
  },
  Wholesale: {
    first_name: faker.name.firstName().replace("'", ""),
    last_name: faker.name.lastName().replace("'", ""),
    phone: faker.phone.number("3##-###-####"),
    street: faker.address.street(),
    zipcode: "75901",
    full_name: "XYZ",
    bhphOrOutsideFinance: false,
    vehicle_price: "10000.00",
    totalSalePrice: "11,114.47",
    finalizeSale: true,
    saleType: "BHPH",
    typeOfSale: 2,
    apr: "24.82",
    financeCharge: "3,203.96",
    amountFinanced: "7,910.51",
    totalOfPayments: "11,114.47",
    noOfPayments: "35",
    installmentAmount: "725.57",
    tradeInContains: false,
    tradeInVehicleYear: "2000",
    tradeInVehicleVIN: "5TFUM5F12AX012971",
    tradeInVehiclelicensePlate: "N/A",
    tradeInVehicleMake: " ",
    tradeInVehicleModel: " ",
    differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
    differedDownPaymentAmount: "20",
    dccGapType: "DCC",
    vendorName: "qwerty",
    dccGapDealerPrice: "200",
    dccGapCostPrice: "230",
    salesPerson: "clearent",
    deffDownpaymentContains: false,
  },
};
