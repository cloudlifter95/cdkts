#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWsTsStack } from '../lib/cdk-ws-ts-stack';
import { CdkWsAPITsStack } from '../lib/cdk-ws-api-ts-stack';

const app = new cdk.App();
new CdkWsTsStack(app, 'CdkWsTsStack');
new CdkWsAPITsStack(app, 'CdkWsAPITsStack');
