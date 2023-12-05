import { Item } from './summary-items'
import data from  "../data.json"
import "./summary.css"
export function Summary(){
		
	
		return (
			 <div className='section-summary' style={{padding: "0 15px",flex: 'none'}}> 
			 <h2>Summary</h2>
			 {
				data.map((el)=>{
				return <Item element={el} />
				})
			 }
			 <button type='button'  >Continuer</button>
			 </div>
		)
}