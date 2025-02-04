type PostCfpParams = {
  name: string;
  twitterHandler: string;
  title: string;
  description: string;
  duration: number;
  language: string;
  bio: string;
  social: string;
  email: string;
};

const postCfp = async (params: PostCfpParams) => {
  const response = await fetch(
    "https://ziqr6rpq3j.execute-api.us-east-1.amazonaws.com/production/cfp",
    {
      method: "POST",
      body: JSON.stringify(params),
    }
  );

  if (response.status !== 200) {
    return false;
  } else {
    return true;
  }
};

export { postCfp };
