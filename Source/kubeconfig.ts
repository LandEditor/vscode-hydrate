import {
	getDefaultKubeConfig,
	getEnvKubeConfig,
	getVscodeKubeConfig,
} from "./getKubeHelpers";

export function getKubeConfig(): string {
	let kubeConfig = getVscodeKubeConfig();

	if (!kubeConfig) {
		kubeConfig = getEnvKubeConfig();
	}

	if (!kubeConfig) {
		kubeConfig = getDefaultKubeConfig();
	}

	return kubeConfig;
}
