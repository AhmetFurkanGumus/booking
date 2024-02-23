import React, { useState } from 'react';
import '../login/style.css';

const LoginSignUp = () => {
    return (
        <>
            <section className="w3l-login-6">
                <div className="login-hny">
                    <div className="form-content">
                        <div className="form-left">
                            <div className="middle">
                                <h4>GİRİŞ YAP</h4>
                                <p>Hesabına Giriş Yap</p>
                            </div>
                            <form action="#" method="post" className="signin-form">
                                <div className="form-input">
                                    <label>Email</label>
                                    <input type="email" name placeholde required />
                                </div>
                                <div className="form-input">
                                    <label>Şifre</label>
                                    <input type="password" name placeholder required />
                                </div>
                                <button className="btn">Giriş Yap</button>
                            </form>
                            <div className="copy-right text-center">
                                <p>© 2024 BookStore.Tüm Hakları Saklıdır| Design by Furkan Gümüş & Kübra Tutal</p>
                            </div>
                        </div>
                        <div className="form-right">
                            <div className="overlay">
                                <div className="grid-info-form">
                                    <h3>Giriş Yap ve Fırsatları Kaçırma</h3>
                                    <p>"Kimi insan gölgeleri kucaklar durur; <br /> sonunda senin gibi mutluluğun gölgesini bulur." <br /> WILLIAM SHAKESPEARE </p>
                                    <a href="/Signup" className="read-more-1 btn">Hesabın Yok Mu?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginSignUp;
