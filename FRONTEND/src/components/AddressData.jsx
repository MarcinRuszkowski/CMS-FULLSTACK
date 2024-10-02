function AddressData({ address }) {
  return (
    <div className="">
      <p className="text-secondary-color text-xl font-bold">Dane adresowe</p>
      <div className="flex flex-col sm:flex-row text-secondary-color gap-3">
        <p>{address.street}</p>
        <p className="sm:flex hidden">•</p>
        <p>{address.city}</p>
        <p className="sm:flex hidden">•</p>
        <p>{address.zipCode}</p>
        <p className="sm:flex hidden">•</p>
        <p>{address.room}</p>
      </div>
    </div>
  );
}

export default AddressData;
