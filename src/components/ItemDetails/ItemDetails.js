const ItemDetails = ({ image, elementData, text }) => {
  return (
    <div className="align-bottom">
      <img className="inline w-5" src={image} alt="icon" />
      <span className="ml-2 align-bottom leading-5 text-cyan-800">{`${elementData} ${text}`}</span>
    </div>
  );
};

export default ItemDetails;
