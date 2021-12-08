import React from 'react'
import Image from 'next/image'

export default function Illustration() {
    return (
        <div className="col-lg-6 col-12 d-lg-block d-none">
                        <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                            <div className="position-relative" data-aos="zoom-in">
                                <img src="/img/Header-1.png" className="img-fluid" alt="" />
                                <div className="card left-card position-absolute border-0">
                                    <div className="d-flex align-items-center mb-16 gap-3">
                                        <img src="/img/Header-2.png" width="40" height="40" className="rounded-pill"
                                            alt="" />
                                        <div>
                                            <p className="text-sm fw-medium color-palette-1 m-0">Shayna Anne</p>
                                            <p className="text-xs fw-light color-palette-2 m-0">Professional Gamer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Image src="/icon/star.svg" alt="star" width={24} height={24} />
                                        <Image src="/icon/star.svg" alt="star" width={24} height={24} />
                                        <Image src="/icon/star.svg" alt="star" width={24} height={24} />
                                        <Image src="/icon/star.svg" alt="star" width={24} height={24} />
                                        <Image src="/icon/star.svg" alt="star" width={24} height={24} />
                                        {/* <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                                                fill="#FEBD57" />
                                        </svg>
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                                                fill="#FEBD57" />
                                        </svg>
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                                                fill="#FEBD57" />
                                        </svg>
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.0489 0.927049C11.3483 0.0057386 12.6517 0.00574004 12.9511 0.927051L14.9187 6.98278C15.0526 7.3948 15.4365 7.67376 15.8697 7.67376H22.2371C23.2058 7.67376 23.6086 8.91338 22.8249 9.48278L17.6736 13.2254C17.3231 13.4801 17.1764 13.9314 17.3103 14.3435L19.2779 20.3992C19.5773 21.3205 18.5228 22.0866 17.7391 21.5172L12.5878 17.7746C12.2373 17.5199 11.7627 17.5199 11.4122 17.7746L6.2609 21.5172C5.47719 22.0866 4.42271 21.3205 4.72206 20.3992L6.68969 14.3435C6.82356 13.9314 6.6769 13.4801 6.32642 13.2254L1.17511 9.48278C0.391392 8.91338 0.794168 7.67376 1.76289 7.67376H8.13026C8.56349 7.67376 8.94744 7.3948 9.08132 6.98278L11.0489 0.927049Z"
                                                fill="#FEBD57" />
                                        </svg> */}
                                    </div>
                                </div>
                                <div className="card right-card position-absolute border-0">
                                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                                        <img src="/img/Header-3.png" className="rounded-pill" alt="" />
                                        <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                                            New</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-center m-0 fw-medium color-palette-1">Lann Knight</p>
                                        <p className="fw-light text-center m-0 color-palette-2 text-xs">Dota 2</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
    )
}
