export default () => (
  <form action="/api/register" method="post">
    <label>
      First Name: <input type="text" name="firstName" />
    </label>
    <label>
      Last Name: <input type="text" name="lastName" />
    </label>
    <input type="submit" value="submit" />
  </form>
);
