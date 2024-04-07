import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Image } from "antd";

import { useGetAdsByIdMutation } from "@/entities/adsApi";
import { useGetUserProfileQuery } from "@/entities/usersApi";

export const AdsRead: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: profile } = useGetUserProfileQuery();
  const [getAdsById, { data: ads, isLoading }] = useGetAdsByIdMutation();

  useEffect(() => {
    params?.id && getAdsById(params.id);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      <h1>{ads?.title}</h1>
      <p>{ads?.category}</p>
      {ads?.attributes.map((item) => {
        return (
          <h3 key={item.name}>
            {item.name} : {item.value}
          </h3>
        );
      })}
      {ads?.user_id === profile?.id && <Button onClick={() => navigate(`/ads/edit/${ads.id}`)}>Изменить</Button>}
    </>
  );
};
