// page/edit/[itemId].js

import React from 'react';
import { useRouter } from 'next/router';
import UpdateItem from '../../components/UpdateItem';

const EditItemPage = () => {
  const router = useRouter();
  const { itemId } = router.query; 
  return (
    <div>
      <h1>Edit Item {itemId}</h1>
      <UpdateItem itemId={itemId} /> 
    </div>
  );
};

export default EditItemPage;

