// pages/edit/[itemId].js

import { useRouter } from 'next/router';
import UpdateItem from '../../components/UpdateItem';

const EditItemPage = () => {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <div>
      <h1>Edit Item {id}</h1>
      <UpdateItem/> 
    </div>
  );
};

export default EditItemPage;
