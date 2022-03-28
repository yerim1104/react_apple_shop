import React,{useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let Box = styled.div`
padding: 20px;

`;
let Titlestyle=styled.h4`
font-size : 25px;
color: ${props => props.stylecolor};
`;

function Detail(props){
    let [alert, alertSet] = useState(true);

    useEffect(()=>{
        let timer = setTimeout(()=>{alertSet(false)},2000);
        return ()=>{clearTimeout(timer)}
    },[]);


        
        let [inputdata, inputdataSet] = useState('');

        let {id} = useParams();
        let finditem = props.shoes.find(function(item){
            return item.id == id
        });
        let history = useHistory();


    return (
        <div className="container">
            <Box><Titlestyle className='titlecolor'>
            Detail
            </Titlestyle></Box>

            <input onChange = {(e)=>{inputdataSet(e.target.value)}}/>
            
            {
                alert === true
                ?(<div className='my-alert'>
                <p>재고가 얼마 남지 않았습니다.</p>
                 </div>) 
                :null
            }

            

            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                <h4 className="pt-5">{finditem.title}</h4>
                <p>{finditem.content}</p>
                <p>{finditem.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();
                }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;
