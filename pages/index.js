import Layout from "/components/layout";

const HomePage = () => (
  <Layout>
    <form action="/api/register" method="post">
      <label>
        First Name: <input type="text" name="firstName" />
      </label>
      <br />
      <label>
        Last Name: <input type="text" name="lastName" />
      </label>
      <br />
      <input type="submit" value="submit" />
    </form>
  </Layout>
);

export default HomePage;
