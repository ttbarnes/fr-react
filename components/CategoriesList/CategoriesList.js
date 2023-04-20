import Link from 'next/link';

const CategoriesList = ({ categories }) => (
  <ul className='categories-list'>
    {categories.map((category) => (
      <li
        key={category.TEXT}
        className='categories-list-item'
      >

        <Link href={category.ROUTE}>
          <a>
            <div className='categories-list-item-image-container' aria-hidden='true'>
              <img src={category.IMAGE_URL} alt={category.TEXT} className='categories-list-item-image' />

              <h2 className='categories-list-item-heading'>{category.TEXT}</h2>
            </div>
          </a>

        </Link>

      </li>
    ))}
  </ul>
);

export default CategoriesList;
