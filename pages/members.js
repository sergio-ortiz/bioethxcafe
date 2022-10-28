import prisma from "/lib/prisma";
import Layout from "/components/layout";
import styles from "/styles/members.module.css";

export async function getServerSideProps() {
  const members = await prisma.Member.findMany();
  return { props: { members } };
}

const MembersPage = (props) => (
  <Layout>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
        </tr>
      </thead>
      <tbody>
        {props.members
          .sort((a, b) => b.id - a.id)
          .map((member) => (
            <tr key={member.id}>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </Layout>
);

export default MembersPage;
