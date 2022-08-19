import './directory-item.styles.scss';

const DirectoryItem = (props) => {
  const imageUrl = props.category.imageUrl;
  const title = props.category.title;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
