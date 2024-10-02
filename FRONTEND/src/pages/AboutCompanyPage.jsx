import Card from "../components/Card";

function AboutCompanyPage() {
  return (
    <div className="flex flex-col gap-5 p-10">
      <Card
        linkTo="/aboutCompany/mainDocs"
        title="dokumenty różne"
        color="border-main-color text-main-color"
      />
      <Card
        linkTo="/aboutCompany/departments"
        title="działy"
        color="border-main-color text-main-color"
      />
      <Card
        linkTo="/aboutCompany/docs"
        title="dokumenty spółek"
        color="border-main-color text-main-color"
      />
    </div>
  );
}

export default AboutCompanyPage;
