import prisma from "/lib/prisma";

export async function getServerSideProps() {
  const props = {};
  props.results = await prisma.Member.findMany();

  return { props };
}

export default (props) => <>{JSON.stringify(props.results)}</>;
