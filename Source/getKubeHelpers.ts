import { homedir } from "os";
import * as path from "path";
import * as vscode from "vscode";

const HOME = homedir();

export function getVscodeKubeConfig(): string | undefined {
	return vscode.workspace.getConfiguration("vs-kubernetes")[
		"vs-kubernetes.kubeconfig"
	];
}

export function getEnvKubeConfig(): string | undefined {
	return process.env.KUBECONFIG;
}

export function getDefaultKubeConfig(): string {
	return `${HOME}${path.sep}.kube${path.sep}config`;
}
