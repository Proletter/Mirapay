import React from 'react';
import { useTranslation } from 'react-i18next';
import { Progress, Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';
import styles from './ListAccount.module.css'

const Brasilia = `${process.env.PUBLIC_URL}/img/flags/Brasil.svg`;
const Argentina = `${process.env.PUBLIC_URL}/img/flags/Argentina.svg`;
const Gabon = `${process.env.PUBLIC_URL}/img/flags/Gabon.svg`;
const Ireland = `${process.env.PUBLIC_URL}/img/flags/Ireland.svg`;
const Italian = `${process.env.PUBLIC_URL}/img/flags/Italia.svg`;
const Sierra = `${process.env.PUBLIC_URL}/img/flags/Sierra.svg`;

const header = [
  { id: 0, title: 'Name' },
  { id: 1, title: 'Account Number' },
  { id: 2, title: 'Account Type' }, 
  { id: 4, title: 'Currency' }
];

const rows = [
  {
    id: 0,
    name: "Ola John",
    acccount_number: '12134',
    account_type: 'Desktop',
    currency: "USD"
  }, {
    id: 1,
    name: "James Nobody",
    acccount_number: '47584',
    account_type: 'Mobile',
    currency: "NGN",
  }, {
    id: 2,
    name: "Ola Jacob",
    acccount_number: '24235',
    account_type: 'Desktop',
    currency: "USD",
  }, {
    id: 3,
    name: "Ola Samuel",
    acccount_number: '2255',
    account_type: 'Desktop',
    currency: "GHC",
  }
];

const ListAccounts = () => {
  const { t } = useTranslation('common');

  return (
    // <Panel lg={12} xl={8} md={12}>
      <Table responsive className="table--bordered dashboard__audience-table">
        <thead>
          <tr>
            {header.map(item => (
              <th className={styles.thead_overide} key={item.id}><p>{item.title}</p></th>
            ))}
          </tr>
        </thead>
        <tbody >
          {rows.map(item => (
            <tr  key={item.id}>
             <td className={styles.tdstyles}><p>{item.name}</p></td>
              <td className={styles.tdstyles}><p>{item.acccount_number}</p></td>
              <td className={styles.tdstyles}><p>{item.account_type}</p></td>
              <td className={styles.tdstyles}><p>{item.currency}</p></td>
              <td>
              <button type="submit" className={`${styles.button} btn btn-primary account__btn account__btn--small`}>Switch to</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    // </Panel>
  );
};

export default ListAccounts;
