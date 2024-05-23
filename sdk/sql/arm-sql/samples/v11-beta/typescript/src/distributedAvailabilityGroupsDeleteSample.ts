/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
 *
 * @summary Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2023-08-01-preview/examples/DistributedAvailabilityGroupsDelete.json
 */
async function initiateADistributedAvailabilityGroupDrop() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const managedInstanceName = "testcl";
  const distributedAvailabilityGroupName = "dag";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.distributedAvailabilityGroups.beginDeleteAndWait(
    resourceGroupName,
    managedInstanceName,
    distributedAvailabilityGroupName,
  );
  console.log(result);
}

async function main() {
  initiateADistributedAvailabilityGroupDrop();
}

main().catch(console.error);
