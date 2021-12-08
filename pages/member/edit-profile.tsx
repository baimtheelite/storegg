import Sidebar from "../../components/organisms/Sidebar";
import Image from "next/image";
import Input from "../../components/atoms/Input";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, PlayerTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";

interface PlayerStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any
}

export default function EditProfile() {
  const [player, setPlayer] = useState<PlayerStateTypes>({
    id: "",
    email: "",
    name: "",
    // phone: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState("/");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const player: PlayerTypes = payload.player;

      setPlayer(player);
    }
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMAGE;

  const onSubmit = () => {
  };
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 6H5H21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 11V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 11V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview === "/" ? (
                      <img
                        src={imagePreview}
                        width={90}
                        height={90}
                        className="avatar img-fluid"
                      />
                    ) : (
                      <img
                        src={`${IMG}/${player.avatar}`}
                        width="90"
                        height="90"
                        className="avatar img-fluid"
                      />
                    )} 
                  </label>
                  <Input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setPlayer({ ...player, avatar: img });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  placeholder="Enter Your Full Name"
                  value={player.name}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  placeholder="Enter Your Email Address"
                  value={player.email}
                  disabled
                />
              </div>
              {/* <div className="pt-30">
              <Input label="Phone" placeholder="Enter Your Phone Number" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  role="button"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
