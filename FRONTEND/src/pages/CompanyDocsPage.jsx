import DocsCategory from "../components/DocsCategory";

function CompanyDocsPage() {
  const documentsForCategory1 = [
    { title: "Aktualny wpis do KRS", size: "5.8" },
    { title: "Aktualny wpis do KRS", size: "1.5" },
    { title: "Dokument finansowy", size: "2.4" },
  ];

  const documentsForCategory2 = [
    { title: "Regulamin organizacyjny", size: "3.3" },
    { title: "Umowa spółki", size: "4.0" },
    { title: "Regulamin spółki", size: "4.0" },
    { title: "Umowa spółki", size: "4.0" },
  ];

  const documentsForCategory3 = [
    { title: "Sprawozdanie finansowe", size: "10.1" },
    { title: "Deklaracja VAT", size: "0.9" },
  ];

  return (
    <section className="flex flex-col gap-5 mx-5">
      <p className="text-3xl font-bold text-secondary-color">PTWP S.A.</p>
      <DocsCategory category="Rejestry" documents={documentsForCategory1} />
      <DocsCategory category="Umowy" documents={documentsForCategory2} />
      <DocsCategory category="Sprawozdania" documents={documentsForCategory3} />
    </section>
  );
}

export default CompanyDocsPage;
