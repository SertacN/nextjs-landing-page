import React from "react";
import manageDb from "@/mocks/api";
import styles from "./styles.module.css";

async function Api() {
  return new Promise((resolve, reject) => {
    const mockManageData = manageDb;

    setTimeout(() => {
      resolve(mockManageData);
    }, 2000);
  });
}

async function Manage() {
  const data = await Api();

  return (
    <section id="manage" className="section">
      <div>
        <h1 className={styles.header}>What’s different about Manage?</h1>
        <p className={styles.description}>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.manage}>
              <span className={styles.manageId}>{item.id}</span>
              <div>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Manage;
