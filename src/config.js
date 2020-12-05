const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "sunilvb-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://avcmecvng8.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_0DvXg5f6z",
      APP_CLIENT_ID: "13kiuggtfbalkmik09p6ie9hks",
      IDENTITY_POOL_ID: "us-east-1:25a49afe-6c9f-4c22-b782-bb6df7394a22",
    },
  };
  
  export default config;