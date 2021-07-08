import  kubernetesClient  from '@kubernetes/client-node'

const kubernetsConfig = new kubernetesClient.KubeConfig();
expect(kubernetsConfig).not.toBeNull();