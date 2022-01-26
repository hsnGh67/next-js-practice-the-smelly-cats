import axios from "axios"
import { useRef, useState } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import PaginateComponent from "../paginate/PaginateComponent"
import styles from "./showsTable.module.css"

const ShowsTable = ({shows , getPage})=>{

    const [showRemoveModal , setShowRemoveModal] = useState(false)
    const removeId = useRef(null)

    const removePressed = (show)=>{
        removeId.current = show._id
        setShowRemoveModal(true)
    }

    const remove = async(show) =>{
        const result = await axios.delete(
            "/api/show/delete",
            {
                id : show._id
            }
        )
    }

    const onEdit = show =>{
        alert("Edit")
    }

    return(
        <>
            <div className="col col-lg-6 ms-lg-1 mt-lg-4 mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Venue
                            </th>
                            <th>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shows.docs.map(show =>(
                                <tr key={show._id}>
                                    <td>
                                        {show.title}
                                    </td>
                                    <td>
                                        {show.venue}
                                    </td>
                                    <td>
                                        {show.date}
                                    </td>
                                    <td
                                        className={`${styles.remove} noSelect`}
                                        onClick={()=>removePressed(show)}
                                    >
                                        Remove
                                    </td>
                                    <td
                                        className={`${styles.edit} noSelect`}
                                        onClick={()=>onEdit(show)}
                                    >
                                        Edit
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                {

                }
            </div>
            <PaginateComponent
                {...shows}
                getPage={getPage}
            />
            <Modal
                show={showRemoveModal}
                onHide={()=>setShowRemoveModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>
                        Delete Show
                    </Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <p>
                        Are you Sure?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={remove}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={()=>setShowRemoveModal(false)}
                    >
                       Close
                    </Button>
                </Modal.Footer>      
            </Modal>
        </>
        
    )
}

export default ShowsTable