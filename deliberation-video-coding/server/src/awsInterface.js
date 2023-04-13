import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Need to set up credentials
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-node-credentials-shared.html
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html

export async function getPresignedUrl({ region, bucket, S3Path }) {
  console.log(S3Client);
  // const client = new S3Client({ region });
  //   const command = new GetObjectCommand({ Bucket: bucket, Key: S3Path });
  //   return getSignedUrl(client, command, { expiresIn: 3600 });
  //   // Todo: check that the URL actually exists
}
