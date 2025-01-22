<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue'; // Import ref from Vue
import { resolveComponent } from 'vue'; // Import resolveComponent
// import AlertDialog from '@/components/ui/alert-dialog/AlertDialog.vue';

// Dynamically change the title for this page
useHead({
  title: 'WeSocially | Dashboard',
});

const loading = ref(false);
const list = [
  {
    Title: 'Today',
    component: resolveComponent('TabsToday'), // Dynamically resolve the component by name
  },
  {
    Title: 'This week',
    component: resolveComponent('TabsWeek'), // Dynamically resolve for other tabs
  },
  {
    Title: 'This month',
    component: resolveComponent('TabsMonth'),
  },
  {
    Title: 'This year',
    component: resolveComponent('TabsYear'),
  },
];
</script>

<template>
  <div class="w-screen h-screen top-0">
    <div class="grid gap-4 top-10">
      <header class="flex item-start justify-between">
        <div class="grow">
          <p class="text-neutral-500">Welcome back, partner</p>
          <h1 class="text-3xl">Dashboard</h1>
        </div>
        <!-- <div class="w-[120px] h-[36px] bg-neutral-200 rounded-sm"></div> -->

        <!-- <ProductNew /> -->
        <!-- <AlertDialog /> -->
      </header>
      <main class="grid gap-4">
        <!-- Placeholder sections, commented out for now -->

        <Tabs default-value="today" class="w-[400px]">
          <TabsList>
            <TabsTrigger
              v-for="(item, index) in list"
              :key="index"
              :value="item.Title"
            >
              {{ item.Title }}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            v-for="(item, index) in list"
            :key="index"
            :value="item.Title"
          >
            <component :is="item.component" />
            <!-- Dynamically render the component here -->
          </TabsContent>
        </Tabs>

        <!-- Example Card and form section (commented out for now) -->
        <!-- 
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" default-value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" default-value="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
        </TabsContent> 
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div class="space-y-1">
                <Label for="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs> -->
      </main>
      <footer>
        <div class="flex items-center gap-4">
          <div
            v-for="(item, index) in 3"
            :key="index"
            class="w-1/4 h-[260px] bg-neutral-200 rounded-md"
          ></div>
        </div>
      </footer>
    </div>
  </div>
</template>
