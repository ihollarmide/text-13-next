import getUser from "../../../utils/getUser";

export default async function UserHead({ params }) {
  const user = await getUser(params.slug);

  const title = `Lendsqr | ${user.profile.firstName} ${user.profile.lastName}`;
  const metaContent = `${user.profile.firstName} ${user.profile.lastName} Personal Information, Employment Information, Education Information, Guarantor Information and Social Media Information`;

  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={metaContent} />
      <meta name="author" content="Idris Olamide Ganiyu" />
    </>
  );
}
