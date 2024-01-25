import cron from 'node-cron';

// Run every 2 seconds
cron.schedule('*/2 * * * * *', () => {
    console.log('running every 2 seconds');
});

// Run every 2 minutes
cron.schedule('* */2 * * * *', () => {
    console.log('running every 2 minutes');
});
