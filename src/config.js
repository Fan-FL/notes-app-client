const dev = {
    STRIPE_KEY: "pk_test_CIWj43dggOS45YdsDcezGVPD00oybKBVIB",
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-p364jiuwa0bp"
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "https://n5vxw33w75.execute-api.ap-southeast-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_8uNOf9uHR",
        APP_CLIENT_ID: "khcb88kjjqbke96379khr094s",
        IDENTITY_POOL_ID: "ap-southeast-2:46962b65-6448-4ac9-a218-318e2c43d3ca"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_CIWj43dggOS45YdsDcezGVPD00oybKBVIB",
    s3: {
        REGION: "ap-southeast-2",
        BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
        REGION: "ap-southeast-2",
        URL: "https://4v8rslhmy7.execute-api.ap-southeast-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "ap-southeast-2",
        USER_POOL_ID: "ap-southeast-2_YxoSocajj",
        APP_CLIENT_ID: "575phgpj13lfgo69v5j7f9s1pi",
        IDENTITY_POOL_ID: "ap-southeast-2:020e9353-8501-4cbe-ab31-999a40bb462e"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};