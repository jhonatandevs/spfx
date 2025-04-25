import * as React from 'react';
import type { IFaqProps } from './IFaqProps';
import { SPFI } from '@pnp/sp';
import { IFAQ } from '../../../interfaces';
import { getSP } from '../../../pnpjsConfig';
import { useEffect } from 'react'; // Ensure React's useEffect is imported

const Faq = (props: IFaqProps) => {
  // const LOG_SOURCE = 'FAQ Webpart';
  const LIST_NAME = 'FAQ';
  let _sp: SPFI = getSP(props.context);
  const [faqItems, setFaqItems] = React.useState<IFAQ[]>([])
  const getFQAItems = async () => {
    console.log('context',_sp)
    const items = _sp?.web.lists.getByTitle(LIST_NAME).items();
    console.log('items', items)
    const itemsData = await items;
    console.log('itemsData', itemsData)
    setFaqItems(itemsData);
    console.log('faqItems', faqItems)
  }
  useEffect(() => {
    getFQAItems().catch(error => {
      console.error('Error fetching FAQ items:', error);
    });
  }, []);
  return (
    <h1>Hello World</h1>
  )

}
export default Faq; 

/*
const Faq =(props: IFaqProps)=>{
  return (
    <h1>Hello World</h1>
  )
}
export default Faq

*/