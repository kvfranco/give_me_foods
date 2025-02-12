import styles from "./ContactItem.module.css";

interface ContactItemPropsType {
  contact: string;
  link: string;
  children: React.ReactNode;
}

export default function ContactItem({
  contact,
  link,
  children,
}: ContactItemPropsType) {
  return (
    <div className={styles.containerContactItem}>
      <a href={link} target="_blank">
        <span>{children}</span>
        <span>{contact}</span>
      </a>
    </div>
  );
}