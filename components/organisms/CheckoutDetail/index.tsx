import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

export default function CheckoutDetail() {
  const [dataTopup, setDataTopup] = useState({
    verifyId: "",
    nominalItem: {
      price: 0,
      coinQuantity: 0,
      coinName: "",
      _id: 0,
    },
    paymentItem: {
      payment: {
        type: "",
        _id: "",
      },
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
    },
    bankAccountName: ""
  });
  useEffect(() => {
    const dataTopupLocal = JSON.parse(localStorage.getItem("data-topup")!);
    setDataTopup(dataTopupLocal);
  }, []);

  const itemPrice = dataTopup.nominalItem.price;
  const tax = itemPrice * (10/100);
  const totalPrice = itemPrice + tax;
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID <span className="purchase-details">{dataTopup.verifyId}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item <span className="purchase-details">{dataTopup.nominalItem.coinQuantity} {dataTopup.nominalItem.coinName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price <span className="purchase-details"><NumberFormat value={itemPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%) <span className="purchase-details"><NumberFormat value={tax} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
          <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{dataTopup.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type <span className="payment-details">{dataTopup.paymentItem.payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name <span className="payment-details">{dataTopup.paymentItem.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{dataTopup.paymentItem.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">{dataTopup.paymentItem.bank.noRekening}</span>
        </p>
      </div>
    </>
  );
}
