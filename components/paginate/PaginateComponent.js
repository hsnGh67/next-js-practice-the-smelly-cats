import { Pagination } from "react-bootstrap"

const PaginateComponent = ({totalPages , hasPrevPage , hasNextPage , page , getPage})=>{
    
    const indicators = Array.from(Array(totalPages) , (_,x)=>x+1)
    const list  = indicators.length > 4 ? page > 2?indicators.splice(page-3 , 5) : indicators.splice(0 , 5) : indicators

    if(totalPages > 1){
        return(
            <Pagination>
                {
                    list[0] !== 1 && 
                    <Pagination.First
                        onClick={()=>getPage(1)}
                    />
                }
                {
                    hasPrevPage && 
                    <Pagination.Prev
                        onClick={()=>getPage(page - 1)}
                    />
                }
                {
                    list.map((item)=>(
                        <Pagination.Item
                            active={page === item}
                            onClick={()=>getPage(item)}
                            key={item.toString()}
                        >
                            {
                                item
                            }
                        </Pagination.Item>
                    ))
                }
                {
                    hasNextPage && 
                    <Pagination.Next
                        onClick={()=>getPage(page + 1)}
                    />
                }
                
                {
                    list[(list.length - 1)] < totalPages && 
                    <Pagination.Last
                        onClick={()=>getPage(totalPages)}
                    />
                }
            </Pagination>
        )
    }
    return null
}

export default PaginateComponent