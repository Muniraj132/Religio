import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ApiUrl from "../Api/Api";
import { Link, useNavigate } from "react-router-dom";




function PaymentList(){
  const fetchData = ()=>{
        fetch(`${ApiUrl}/Religio/Clientregistration`).then((res) => {
          return res.json();
      }).then((resp) => {
        SetClientregister(resp.data);
      }).catch((err) => {
          console.log(err.message);
      })
  }
useEffect(() => {
  fetchData();
}, [])

const [ register, SetClientregister ] = useState([]);
const navigate = useNavigate();
 const EditClientregistration =async (e,id)=>{
  navigate("/Religio/ClientregistrationEdit/" + id);
 }
const deleteregister = async (e,id) =>{
 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${ApiUrl}/Religio/Clientregistration/${id}`).then((res)=>{
        fetchData();
      })
      Swal.fire(
        'Deleted!',
        'Your record has been deleted.',
        'success'
      );
      
    }
  })
}
// $(document).ready(function () {
//   $("#myInput").on("keyup", function () {
//       var value = $(this).val().toLowerCase();
//       $("#Mytable tbody td").filter(function () {
//           $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//       });
//   });
// });
    return (
        <div className="content-wrapper">
        <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-account-plus menu-icon" />
          </span> Client Registration List
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span />Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
            </li>
          </ul>
        </nav>
      </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <h4 className="card-title">Payment List</h4>
              <div className="row">
              <div className="col-lg-10">
              {/* <input id="myInput" type="text" placeholder="Search.."></input> */}

              </div>
              <div className="col-lg-2"> 
              <Link to="/Religio/PaymentCreate" className="btn btn-gradient-light">Add</Link>
               </div>
            </div>
                <table className="table table-striped Mytable">
                  <thead>
                    <tr>
                      <th>Congregation </th>
                      <th>Province</th>
                      <th>Name</th>
                      <th>Place</th>
                      <th>Client</th>
                      <th>Financial Year</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {         
                    register && register.map(item => (
                      <tr key={item.id}>
                          <td>{item.Congregation}</td>
                          <td>{item.Province}</td>
                          <td>{item.Name}</td>
                          <td>{item.Place}</td>
                          <td>{item.FinancialYear }</td>
                          <td id="noprint"><a onClick={(e) => EditClientregistration(e, item.id)} style={{ cursor: 'pointer' }} className="mdi mdi-pencil-box" id="print">Edit</a> /
                              &nbsp;<a onClick={(e) => deleteregister(e, item.id)} style={{ cursor: 'pointer' }}  className="mdi mdi-delete" id="print">Delete</a>
                          </td>
                      </tr>   
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}
export default PaymentList;