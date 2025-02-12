import useCounterUp from "../../hooks/useCounterUp";
import styles from "./CompanyNumbers.module.css";

interface CompanyNumbersType {
  yearsOfExperience: number;
  storesSelling: number;
  loyalCustomers: number;
}

const companyNumbers: CompanyNumbersType = {
  yearsOfExperience: 3,
  storesSelling: 10,
  loyalCustomers: 1500,
};

export default function CompanyNumbers() {
  const showCompanyNumbers = useCounterUp(companyNumbers, 2000, 30);
  return (
    <div className={styles.containerCompanyNumbers}>
      <div>
        <p className={styles.paragraph}>
          {showCompanyNumbers.yearsOfExperience}
        </p>
        <p>Years of Experience</p>
      </div>
      <div>
        <p className={styles.paragraph}>{showCompanyNumbers.storesSelling}</p>
        <p>Stores Selling</p>
      </div>
      <div>
        <p className={styles.paragraph}>
          {showCompanyNumbers.loyalCustomers.toLocaleString("en-GB")}
        </p>
        <p>Loyal Customers</p>
      </div>
    </div>
  );
}