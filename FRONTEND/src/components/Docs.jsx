import Doc from "./Doc";

function Docs() {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row mx-5 justify-center gap-5">
      <Doc
        linkTo="/aboutCompany/docs/companyDocs"
        iconColor="text-green-500"
        companyName="COMPANY S.A."
        docsAmount="9238479"
      />
      <Doc
        linkTo="/aboutCompany/docs/companyDocs"
        companyName="COMPANY ONLINE Sp z o.o."
        docsAmount="1231"
      />

      <Doc
        linkTo="/aboutCompany/docs/companyDocs"
        iconColor="text-yellow-500"
        companyName="COMPANY Event Center Sp z o.o."
        docsAmount="12"
      />
      <Doc
        linkTo="/aboutCompany/docs/companyDocs"
        iconColor="text-yellow-500"
        companyName="COMPANY Event Center Sp z o.o."
      />
      <Doc
        linkTo="/aboutCompany/docs/companyDocs"
        iconColor="text-purple-400"
        companyName="COMPANY ONLINE Sp z o.o."
        docsAmount="23456"
      />
      <Doc linkTo="/aboutCompany/docs/companyDocs" iconColor="text-red-500" docsAmount="2" />
    </div>
  );
}

export default Docs;
