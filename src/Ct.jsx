import React from "react";

const Ct = () => {
  return (
    <>
      <div className="container1">
        <p>
          <h3>Corporation Tax</h3>
          Corporation Tax is levied on all taxable profits of any company that
          is based in the UK, no matter where in the world the profit was
          generated. <br />
          <br />
          Corporation Tax is calculated and paid annually based on your
          company's 'Corporation Tax accounting period' (CTAP), which is usually
          the same as the company's financial year.
        </p>
        <table className="table">
          <tr>
            <td>Financial Year * to</td>
            <td>31 March 2022</td>
            <td>31 March 2021</td>
          </tr>
          <tr className="trcolor">
            <td>All profits</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Main rate</td>
            <td>19%</td>
            <td>19%</td>
          </tr>
          <tr>
            <td>Special IP</td>
            <td>10%</td>
            <td>19%</td>
          </tr>
          <tr>
            <td>Deverted profits</td>
            <td>25%</td>
            <td>25%</td>
          </tr>
        </table>
        <p>
          * a financial year begins on 1 April and ends on the following 31
          March.
          <br />
          <br />
          During his March 2021 Budget The Chancellor announced the UK rate of
          Corporation Tax will increase to 25%, to support the UK post COVID
          recovery. <br />
          <br />
          The increase will not take effect until 2023. <br />
          <br />
          Businesses with profits of up to £50,000 will continue to be taxed at
          19%.
          <br />
          <br />
          A tapered rate will also be introduced for profits above £50,000, so
          that only businesses with profits of £250,000 or greater will be taxed
          at the full 25% rate.
          <br />
          <br />
          Please contact us for assistance with managing your company's tax
          compliance.
        </p>

        <br />
        <br />
      </div>
    </>
  );
};
export default Ct;
