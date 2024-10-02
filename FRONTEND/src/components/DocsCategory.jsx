import DocToDownload from "./DocToDownload";

function DocsCategory({ category = "kategoria", documents = [] }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold text-xl text-main-color border-b-2 border-secondary-color">
        {category.toUpperCase()}
      </p>
      <div className="flex flex-row gap-5 overflow-x-auto">
        {documents.length > 0 ? (
          documents.map((doc, index) => (
            <DocToDownload key={index} title={doc.title} size={doc.size} />
          ))
        ) : (
          <p className="text-secondary-color">Brak dokumentów do pobrania</p>
        )}
      </div>
    </div>
  );
}

export default DocsCategory;
