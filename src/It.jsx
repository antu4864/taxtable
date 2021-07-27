import React from "react";

const It = () => {
  return (
    <>
      <div className="container1">
        <h3> Income Tax</h3>
        <p>
          Income Tax is paid on earned income, taxable interest paid on savings
          and dividend income. <br />
          <br />
          Starting, basic, higher, and additional rate bands and rates. <br />
          <br />
          <h4>UK rates of Income Tax (excluding Scotland & Wales)</h4>
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>Income tax band</td>
            <td></td>
            <td></td>
          </tr>

          <tr className="trcolor">
            <td>Rate</td>
            <td>2021/22</td>
            <td>2020/21</td>
          </tr>

          <tr>
            <td>20%</td>
            <td>Up to £37,700</td>
            <td>Up to £37,500</td>
          </tr>

          <tr>
            <td>40%</td>
            <td>£37,701 - £150,000</td>
            <td>£37,501 - £150,000</td>
          </tr>

          <tr>
            <td>45%</td>
            <td>Over £150,000</td>
            <td>Over £150,000</td>
          </tr>
        </table>

        <p>
          <h4>Note:</h4>
          During his March 2021 Budget speech, the Chancellor announced the
          higher rate threshold will be frozen until 5 April 2026. <br />
          <br />
          <h4>Scottish Rates of Income Tax (SRIT)</h4>
          The Scottish income tax rates and bands differ to those in the rest of
          the UK, but they only apply to income which is not savings or
          dividends. <br />
          <br />
          HMRC identifies Scottish taxpayers by their correspondence address and
          then allocates them a PAYE code with a 'S' prefix.
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>SRIT 2020/21</td>
            <td></td>
            <td></td>
          </tr>

          <tr className="trcolor">
            <td>Taxable income</td>
            <td>Band</td>
            <td>Tax rate</td>
          </tr>

          <tr>
            <td>£12,501*-£14,585</td>
            <td>Starter band</td>
            <td>19%</td>
          </tr>

          <tr>
            <td>£14,586 £25,158</td>
            <td>Basic rate</td>
            <td>20%</td>
          </tr>

          <tr>
            <td>£25,159 £43,430</td>
            <td>Intermediate rate</td>
            <td>21%</td>
          </tr>

          <tr>
            <td>£43,431 - £150,000**</td>
            <td>Higher rate</td>
            <td>41%</td>
          </tr>

          <tr>
            <td>Over £150,000</td>
            <td>Top rate</td>
            <td>46%</td>
          </tr>
        </table>
        <p>
          * Assumes individuals are in receipt of the Standard UK Personal
          Allowance. <br />
          <br />
          ** Those earning more than £100,000 will see their Personal Allowance
          reduced by £1 for every £2 earned over £100,000.
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>SRIT 2020/22</td>
            <td></td>
            <td></td>
          </tr>

          <tr className="trcolor">
            <td>Taxable income</td>
            <td>Band</td>
            <td>Tax rate</td>
          </tr>

          <tr>
            <td>£12,501-£14,585</td>
            <td>Starter band</td>
            <td>19%</td>
          </tr>

          <tr>
            <td>£14,586 £25,158</td>
            <td>Basic rate</td>
            <td>20%</td>
          </tr>

          <tr>
            <td>£25,159 £43,430</td>
            <td>Intermediate rate</td>
            <td>21%</td>
          </tr>

          <tr>
            <td>£43,431 - £150,000</td>
            <td>Higher rate</td>
            <td>41%</td>
          </tr>

          <tr>
            <td>Over £150,000</td>
            <td>Top rate</td>
            <td>46%</td>
          </tr>
        </table>
        <p>
          <h4> Note:</h4>
          The SRIT applies to persons resident in Scotland. <br />
          <h4>Welsh rates of Income Tax (WRIT)</h4>
          From April 2019 the Welsh Government has devolved responsibility to
          decide the rates of Income Tax paid by Welsh taxpayers. <br />
          <br />
          This means that the Welsh Government may vary the WRIT or keep them
          the same as in England and Northern Ireland.
          <br />
          <br />
          From April 2019, the UK government has reduced each of the three rates
          of Income Tax payable by Welsh taxpayers by 10% to:
          <br />
          <br />
          • basic rate from 20% to 10%;
          <br />
          <br />
          • higher rate from 40% to 30%; and
          <br />
          <br />
          • additional rate from 45% to 35%.
          <br />
          <br />
          In turn, the Welsh Government has the power to decide the Welsh rates
          of Income Tax to be added to the reduced UK rates.
          <br />
          <br />
          The National Assembly for Wales has set the WRIT for 2020-21 at 10%
          for each tax band. Meaning that taxpayers in Wales continue to pay tax
          at the same rate as taxpayers resident in England and Northern
          Ireland.
          <br />
          <br />
          HMRC identifies Welsh taxpayers by their correspondence address and
          then allocates them a PAYE code with a 'C' prefix. <br />
          <h4>Welsh rates of Income Tax</h4>
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>Income tax band</td>
            <td></td>
            <td></td>
          </tr>
          <tr className="trcolor">
            <td>Rate</td>
            <td>2021/22</td>
            <td>2020/21</td>
          </tr>
          <tr>
            <td>20%</td>
            <td>Up to £37,700</td>
            <td>Up to £37,500</td>
          </tr>
          <tr>
            <td>40%</td>
            <td>£37,701 - £150,000</td>
            <td>£37,701 - £150,000</td>
          </tr>
          <tr>
            <td>45%</td>
            <td>Over £150,000</td>
            <td>Over £150,000</td>
          </tr>
        </table>
        <p>
          <h4> Note:</h4>
          The Welsh rates apply to persons resident in Wales. <br />
          <br />
          Welsh rates do not apply to dividend and savings income.
          <h4>Personal Allowances</h4>
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>Allowances</td>
            <td>2021/22</td>
            <td>2020/21</td>
          </tr>

          <tr>
            <td>Personal Allowance*</td>
            <td>£12,570</td>
            <td>£12,500</td>
          </tr>

          <tr>
            <td>Transferrable Married Couples Allowance**</td>
            <td>£1,260</td>
            <td>£1,250</td>
          </tr>

          <tr>
            <td>Married Couples Allowance***</td>
            <td>£3,530</td>
            <td>£3,510</td>
          </tr>

          <tr>
            <td>Higher Married Couples Allowance****</td>
            <td>£9,125</td>
            <td>£9,075</td>
          </tr>

          <tr>
            <td>Blind Person's Allowance*****</td>
            <td>£2,520</td>
            <td>£2,500</td>
          </tr>
        </table>
        <p>
          * A personal allowance is reduced by £1 for every £2 that an
          individual's adjusted net income (taxable income) exceeds £100,000. It
          reduces to nil when taxable income reaches £125,140 (2020/21,
          £125,000). <br />
          <br />
          ** Married couples or those in Civil Partnerships, who are not subject
          to tax above the basic rate, can transfer a part of their personal
          allowance to their partner, provided that the transferor does not have
          income subject to tax at the Basic Rate.
          <br />
          <br />
          *** Where at least one spouse or civil partner was born before 6
          April, 1935, a Universal Married Couples Allowance is available.
          <br />
          <br />
          The allowance is given as a reduction to the Income Tax liability. It
          is restricted to the lower of 10% of the allowance or the total of an
          individual's Income Tax liability.
          <br />
          <br />
          **** A Higher Married Couples Allowances is available where at least
          one spouse or Civil Partner was born before 6 April, 1935. The higher
          allowance is withdrawn at a rate of £1 for every £2 that a claimant's
          adjusted net taxable income exceeds £30,400 (2020/21, £30,200).
          <br />
          <br />
          ***** Only available to those registered as blind.
          <h4>Note:</h4>
          During his March 2021 Budget speech, the Chancellor announced the
          income tax personal allowance will be frozen until 5 April 2026.
          <br />
          <br />
          Personal allowances apply UK wide, responsibility for their setting
          has not been devolved to the regions.
          <br />
          <br />
          <h4>Other Income Allowances and Tax Reliefs</h4>
          From 6 April 2016, most UK taxpayers will have a new Personal Savings
          Allowance (PSA). This means that up to £1,000 of income from savings
          (e.g. any credit interest earned) will be tax free for basic
          taxpayers, before being halved for higher rate taxpayers and
          extinguished for additional rate taxpayers.
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>Savings Allowance*</td>
            <td>2021/22</td>
            <td>2020/21</td>
          </tr>

          <tr>
            <td>Basic rate taxpayer</td>
            <td>£1,000</td>
            <td>£1,000</td>
          </tr>

          <tr>
            <td>Higher rate taxpayer</td>
            <td>£500</td>
            <td>£500</td>
          </tr>

          <tr>
            <td>Additional rate taxpayer</td>
            <td>nill</td>
            <td>nill</td>
          </tr>
        </table>
        <p>
          * No tax payable on taxable savings income.
          <h4>Savings Rate Band</h4>
          Persons with non-savings taxable income less than £17,700 (2020/21,
          £17,500) are taxed at 0% up to the first £5,000 (2020/21, £5,000) of
          their savings income.
          <br />
          <br />
          Note: The maximum savings rate is £5,000, it is reduced by £1 for
          every £1 of other taxable income above your Personal Allowance.
          <br />
          <br />
          <h4>Tax on Dividends</h4>
          The first £2,000 (2020/21, £2,000) of dividends received by an
          individual taxpayer are taxed at 0%.
          <br />
          <br />
          The tax you pay depends on which Income Tax band you're in.
          <br />
          <br />
        </p>
        <table className="table">
          <tr className="trcolor">
            <td>Tax band</td>
            <td>Tax rate on dividends over your allowance</td>
          </tr>

          <tr>
            <td>Basics rate</td>
            <td style={{ textAlign: "center" }}>7.5%</td>
          </tr>
          <tr>
            <td>Higher rate</td>
            <td style={{ textAlign: "center" }}>32.5%</td>
          </tr>
          <tr>
            <td>Additional rate</td>
            <td style={{ textAlign: "center" }}>38.1%</td>
          </tr>
        </table>
        <p>
          Add your income from dividends to your other taxable income to work
          out your tax band. You may pay tax at more than one rate. <br />
          <br />
          Dividends that fall within your Personal Allowance do not <br />
          <br />
          count towards your dividend allowance. <br />
          <br />
          When calculating a person's tax liability dividend income is treated
          as the top slice of income. <br />
          <br />
          If you are self-employed or you have complex tax affairs, please
          contact us for advice.
          <h4>High Income Child Benefit Tax Charge</h4>
          The High Income Child Benefit Charge (HICBC) is a tax charge paid by
          taxpayers which seeks to claw back up to 100% of any child benefit
          received by a higher earner or their partner. <br />
          <br />
          HICBC is only payable when the income of the benefit claimant or their
          partner exceeds £50,270 p.a. (2021/20, £50,000). <br />
          <br />
          • HICBC is collected under Self-Assessment. <br />
          <br />• Where taxable income exceeds £60,000 the effect of the charge
          is that all Child Benefit paid is repaid.
          <h4>Election</h4>
          An election may be made not to receive child benefit. Once made, the
          HICBC will no longer apply. <br />
          <br />
          It is only worthwhile making the election if the adjusted net income
          of any partner is in excess of £60,000.
          <h4>Note:</h4>
          • Taxpayers affected by the HICBC are required to register for SA and
          pay their HICBC by 31 January following the end of the tax year. • You
          can choose not to get Child Benefit payments, but <br />
          <br />
          • you should still fill in the Child Benefit claim form.
          <br />
          <br />
          • To ensure that:
          <br />
          <br />
          • You get National Insurance credits towards your State Pension if you
          are on a low income.
          <br />
          <br />• Your child is automatically issued a National Insurance number
          at age 16.
        </p>
      </div>
      <br />
      <br />
    </>
  );
};
export default It;
