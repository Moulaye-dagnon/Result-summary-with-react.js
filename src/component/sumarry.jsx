import { Item } from './summary-items'
import data from  "../data.json"
export function Summary(){
	
		return (
			 <>
			 <h2>Summary</h2>
			 {
				data.map((el)=>{
				return <Item element={el} />
				})
			 }
			 </>
		)
}