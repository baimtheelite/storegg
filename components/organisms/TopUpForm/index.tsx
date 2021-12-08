import router, { useRouter } from "next/router";
import React, { useState } from "react";
import {
  BanksTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm(props: TopUpFormProps) {
  const [verifyId, setVerifyId] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const { nominals, payments } = props;
  const router = useRouter();

  const onNominalItemChange = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };
    
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyId === "" ||
      bankAccountName === "" ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      // alert('Please fill in all the fields');
      toast.error("Please fill in all the fields");
    } else {
      const data = {
        verifyId,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };
  return (
    <>
      <form action="./checkout.html" method="POST">
        <div className="pt-md-50 pt-30">
          <div className="">
            <label
              htmlFor="ID"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Verify ID
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="ID"
              name="ID"
              aria-describedby="verifyID"
              placeholder="Enter your ID"
              value={verifyId}
              onChange={(e) => setVerifyId(e.target.value)}
            />
          </div>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Nominal Top Up
          </p>
          <div className="row justify-content-between">
            {nominals.map((nominal) => (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => onNominalItemChange(nominal)}
              />
            ))}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </div>
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
            Payment Method
          </p>
          <fieldset id="paymentMethod">
            <div className="row justify-content-between">
              {payments.map((payment) =>
                payment.banks.map((bank) => (
                  <PaymentItem
                    key={bank._id}
                    bankId={bank._id}
                    bankType={payment.type}
                    bankName={bank.bankName}
                    onChange={() => onPaymentItemChange(payment, bank)}
                  />
                ))
              )}
              <div className="col-lg-4 col-sm-6"></div>
            </div>
          </fieldset>
        </div>
        <div className="pb-50">
          <label
            htmlFor="bankAccount"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Bank Account Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="bankAccount"
            name="bankAccount"
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
            value={bankAccountName}
            onChange={(e) => setBankAccountName(e.target.value)}
          />
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
          <button
            type="button"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
            onClick={onSubmit}
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
