import React from 'react'
import "./style.scss"

import Header from '../../components/header'
import Layout from '../../layouts/Layout'
import CardShop from '../../components/card_shop'

function Shop() {
    return (
        <div className="cover">
            <Layout>

            <div className="halaman3">
                
                <Header/>        
                
                <div className="contain_halaman3">
                    <div className="conhal3_1">
                        <div className="conhal3_1-1">
                        <p>FEATURED</p>
                        <p className="aktif">CATEGORY 1</p>
                        <p className="aktif">CATEGORY 2</p>
                        <p className="aktif">CATEGORY 3</p>
                        <p className="aktif">CATEGORY 4</p>
                        <p className="aktif">CATEGORY 5</p>
                        </div>
                    </div>

                    <CardShop/>
                   
                    <div className="conhal3_3">
                        <div className="conhal3_3-1">
                        <p>ALL</p>
                        <p className="aktif">FILTER 1</p>
                        <p className="aktif">FILTER 2</p>
                        <p className="aktif">FILTER 3</p>
                        <p className="aktif">FILTER 4</p>
                        <p className="aktif">FILTER 5</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="number_bar">
                <p className="aktif">1</p>
                <p className="aktif">2</p>
                <p className="aktif">3</p>
                <p className="aktif">4</p>
                <p className="aktif">5</p>
                <p className="aktif">6</p>
                <p className="aktif">7</p>
                <p className="aktif">8</p>
                <p className="aktif">9</p>
            </div>
            </Layout>
        </div>
    )
}

export default Shop
